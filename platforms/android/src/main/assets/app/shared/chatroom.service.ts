import { Injectable, NgZone } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
require("nativescript-websockets");

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

    establishConnection(id:string, rooms: string[]):Observable<any> {
        return new Observable(subscriber => {
            this.eventMap = {};
            this.id = id;
            this.receiver = new Subject();
            this.socket = 
                new WebSocket(`ws://${this.host}/ws/join/?id=${id}${rooms.length ?
                    "?rooms=" + rooms.join(',') : ""}`, []);
            this.socket.onopen = (event) => {
                console.log("Handshake success.")
                subscriber.next({
                    success: true,
                    rooms: rooms
                })
                this.initEventsMapping()
            }
            this.socket.onerror = (event) => {
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

    connect(id: string, rooms: string[]):Observable<any> {
        return this.connection.establishConnection(id, rooms)
    }

    requestMessages(data: any, room: string):void {
        this.connection.send(Object.assign({}, data, {room}))
    }

    getMessages(room: string):Observable<any> {
        this.requestMessages({type: "get"}, room)
        return this.on('get', room)
    }

    on(event: string, roomname: string):Subject<any> {
        return this.connection.subscribeTo(event)
    }

    disconnect():Observable<any> {
        return this.connection.closeConnection()
    }
}
