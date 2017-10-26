import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject, Subscription, BehaviorSubject } from 'rxjs/Rx';
require("nativescript-websockets");
const appSettings = require("application-settings");

export class Message {
    text: string
    author: string
    constructor(author: string, text: string) {
        this.text = text
        this.author = author
    }
}

interface EventMap {
    [s: string]:Subject<any>
}

class Connection {
    id: string;
    host: string;
    connected: boolean;
    private receiver: Subject<any>;
    private socket: WebSocket;
    private eventMap:EventMap;
    private rsub:Subscription;

    constructor(host) {
        this.host = host
    }

    private initEventsMapping() {
        this.rsub = this.receiver.map(event => {
            return JSON.parse(event)
        }).subscribe(value => {
            const type = <string>value.type
            if(this.eventMap[type]) {
                return this.eventMap[type].next(value.data)
            }
        })
    }

    establishConnection():Observable<any> {
        return new Observable(subscriber => {
            this.eventMap = {};
            this.receiver = new Subject();
            const token = appSettings.getString("token", "");
            this.socket = 
                new WebSocket(`ws://${this.host}/ws/join/${
                    token ?
                    "?token=" + token : "" 
                }`)
            this.socket.onopen = (event) => {
                this.connected = true;
                console.log("Handshake success.")
                subscriber.next({
                    success: true
                })
                this.initEventsMapping()
            }
            this.socket.onerror = (event) => {
                this.connected = false;
                console.log("Handshake failed.")
                subscriber.error(event)
            }
            this.socket.onmessage = (message) => {
                console.log(JSON.stringify(message.data))
                this.receiver.next(message.data)
            }
        })
    }

    subscribeTo(event: string):Subject<any> {
        if (this.eventMap[event]) {
            return this.eventMap[event]
        } else {
            this.eventMap[event] = new Subject()
            return this.eventMap[event]
        }
    }

    send(data: any):void {
        console.log(JSON.stringify(data))
        this.socket.send(JSON.stringify(data))
    }

    closeConnection():Observable<any> {
        if (!this.socket || !this.socket.CLOSED) {
            throw new Error("Connection is already closed")
        }
        
        return new Observable(subscriber => {
            this.socket.onclose = () => {
                subscriber.next({closed:true})
            }
            this.rsub.unsubscribe()
            this.socket.close()
        })
    }
}

@Injectable()
export class ChatroomService {
    messages: any[]
    rooms: string[]
    private connection: Connection
    constructor() {
        this.messages = []
        this.connection = new Connection("172.18.0.1:8080")
    }

    connect():Observable<any> {
        if (this.connection.connected) {
            return Observable.of({success: true})
        }
        return this.connection.establishConnection()
    }

    requestMessages(data: any, room: string):void {
        this.connection.send(Object.assign({}, data, {target: room}))
    }

    getMessages(room: string):Observable<any> {
        this.requestMessages({type: "get"}, room)
        return this.on('get', room)
    }

    on(event: string, roomname: string):Subject<any> {
        return this.connection.subscribeTo(event)
    }

    sendEvent(eventName: string, data: any, target?:string) {
        let t = target || "system"
        this.connection.send(Object.assign({}, 
            {
                type: eventName, 
                target: t, 
                text: JSON.stringify(data)
            }
        ))
    }

    disconnect():Observable<any> {
        return this.connection.closeConnection()
    }
}
