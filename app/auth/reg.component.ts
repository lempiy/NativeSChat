import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { AuthService } from "./auth.service";
import { ChatroomService } from "../shared/chatroom.service";

@Component({
    selector: "ns-register",
    moduleId: module.id,
    templateUrl: "./reg.component.html",
})
export class RegComponent implements OnInit {
    router: Router;
    auth: AuthService;
    chatroom: ChatroomService;
    ////
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(page: Page, router: Router, auth: AuthService, chatroom: ChatroomService) {
        page.actionBarHidden = true;
        this.router = router;
        this.auth = auth;
        this.chatroom = chatroom;
    }

    onTap($event) {
        let sub = this.auth.register().subscribe(data => {
            if (data.success) {
                console.log(this.auth.getToken())
                this.router.navigate(['/pages']);
            } else {
                alert("Register failed")
            }
        })
    }

    ngOnInit(): void {

    }
}
