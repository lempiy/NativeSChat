import { 
    Component, 
    OnInit, 
    Input, 
    ViewChild, 
    ElementRef, 
    AfterViewInit, 
    ChangeDetectionStrategy,
    NgZone
} from "@angular/core";
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { TextView } from "ui/text-view";
import { ListView } from "ui/list-view";
import { isAndroid } from "platform";
import { ChatroomService, Message } from "../../shared/chatroom.service";
import { EventData } from "data/observable";
import { Button } from "ui/button";
import * as colorModule from "tns-core-modules/color";
import { AnimationCurve } from "ui/enums";
import { View } from "ui/core/view";
import { TnsSideDrawer } from 'nativescript-sidedrawer';
import { Color } from "color";
import { Subscription } from 'rxjs';
import { AuthService } from "../../auth/auth.service";


@Component({
    selector: "ns-chatroom",
    moduleId: module.id,
    templateUrl: "./chatroom.component.html"
})
export class ChatroomComponent implements OnInit, AfterViewInit {
    chatroom: ChatroomService
    newMessage: string
    sendIcon: string
    page: Page
    sendButton: any
    zone: NgZone
    sub: Subscription
    auth: AuthService
    router: Router
    @ViewChild("send") send: ElementRef;
    @ViewChild("textfield") textfield: ElementRef;
    @ViewChild("list") list: ElementRef;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        page: Page, 
        router: Router, 
        chatroom: ChatroomService,
        auth: AuthService,
        ngZone: NgZone) {
        this.router = router
        this.auth = auth
        this.page = page
        this.chatroom = chatroom
        this.sendIcon = String.fromCharCode(0xf1d8)
        this.zone = ngZone;
    }

    onItemTap($event, item) {
        console.dir(item)
    }

    showText() {
        let send = <View>this.send.nativeElement;
        let textfield = <TextView>this.textfield.nativeElement;
        let list = <ListView>this.list.nativeElement;
        send.animate({
            backgroundColor: new colorModule.Color("#2cc151"),    
            duration: 60,
            curve: AnimationCurve.easeIn,
            
        })
        .then(() => {
            return send.animate({
                backgroundColor: new colorModule.Color("#6cc192"),    
                duration: 60,
                curve: AnimationCurve.easeIn,
                
            })
        })
        this.chatroom.messages.push(new Message("Anton", this.newMessage))
        this.newMessage = ""
        
        
        textfield.android.clearFocus();
        textfield.android.setFocusable(false);
        textfield.android.setFocusableInTouchMode(true);
        textfield.dismissSoftInput();
        setTimeout(()=> {
            list.scrollToIndex(this.chatroom.messages.length - 1);
        })
    }

    onTap(args: EventData) {
        let button = <Button>args.object;
        this.showText();
    }

    onMenu() {
        TnsSideDrawer.toggle()
    }

    submit(args) {
        let textview: TextView = <TextView>args.object;
        alert("WOW")
        if (isAndroid) {
            textview.android.clearFocus();
        }
    }

    ngOnDestroy():void {
        this.sub.unsubscribe()
        TnsSideDrawer.close()
    }

    ngOnInit(): void {
        this.sub = this.chatroom.connect()
            .switchMap(() => this.chatroom.getMessages('global'))
            .switchMap((messages: any[]) => {
                //ABC
                this.zone.run(() => {
                    this.chatroom.messages = this.chatroom.messages.concat(
                        messages.map(message => new Message(message.user.username, message.content))
                    )
                })
                return this.chatroom.on('message', 'global')
            })
            .subscribe((message) => {
                this.zone.run(() => {
                    this.chatroom.messages.push(new Message(message.user.username, message.content))
                })
            })
        
        TnsSideDrawer.build({
            templates: [{
                title: 'General',
            }, {
                title: 'Profile',
            }, {
                title: 'Logout',
            }],
            backgroundColor: new colorModule.Color("#56b781"),
            headerBackgroundColor: new colorModule.Color("#31915b"),
            title: 'Go Chat',
            subtitle: 'Just for nice conversations.',
            listener: (index) => {
                switch (index) {
                    case 2: let sub = this.auth.logout().subscribe(() => {
                        this.router.navigate(['auth'])
                        this.sub.unsubscribe()
                        })
                        break;
                }
            },
            context: this,
        })
    }

    ngAfterViewInit():void {
        this.sendButton = this.page.getViewById("send-button")
        let list = <ListView>this.list.nativeElement;
        setTimeout(()=> {
            list.scrollToIndex(this.chatroom.messages.length - 1);
        })
    }
}