import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { AuthService } from "./auth.service";
import { ChatroomService } from "../shared/chatroom.service";

@Component({
    selector: "ns-auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
})
export class AuthComponent implements OnInit {
    login: string;
    router: Router;
    auth: AuthService;
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(page: Page, router: Router, auth: AuthService) {
        page.actionBarHidden = true;
        this.router = router;
        this.auth = auth;
    }

    onTap($event) {
        this.auth.authorize()
        console.log(this.auth.getToken())
        this.router.navigate(['/pages']);
    }

    ngOnInit(): void {
        this.login = 'AUTH LOGIN';
    }
}