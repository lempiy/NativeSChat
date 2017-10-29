import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
const appSettings = require("application-settings");
import { ChatroomService } from "../shared/chatroom.service";

declare var android: any;
declare var java: any;

class LoginData {
    username: string;
    password: string;
}

class RegData {
    username: string;
    password: string;
    repeatPassword: string;
}

@Injectable()
export class AuthService {
    loginData: LoginData;
    regData: RegData;
    cr: ChatroomService;
    parsedJWT: any;

    constructor(cr: ChatroomService) {
        this.cr = cr
        this.loginData = {
            username: "",
            password: "",
        }
        this.regData = {
            username: "",
            password: "",
            repeatPassword: ""
        }
        if (this.getToken()) {
            this.parseJWT()
        }
        this.cr.connect()
            .switchMap(() => this.cr.on("session", "system"))
            .subscribe(data => {
                if (data.token != this.getToken()) {
                    appSettings.setString("token", data.token);
                    this.parseJWT()
                }
            })
    }
    
    getToken() {
        return appSettings.getString("token", "");
    }

    private parseJWT() {
        if (!this.getToken()) {
            return
        }
        let base64Url = this.getToken().split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        this.parsedJWT = JSON.parse(window.atob(base64));
    }

    isLoggedIn() {
        if (this.parsedJWT && this.parsedJWT.exp && this.parsedJWT.username) {
            return (this.parsedJWT.exp * 1000) > Date.now()
        }
        return false
    }
    
    authorize() {
        this.cr.sendEvent("login", this.loginData)
        return this.cr.on("login", "system").map(data => {
            if (data.success) {
                appSettings.setString("token", data.token);
                this.parseJWT()
            }
            return data
        })
    }
    register() {
        this.cr.sendEvent("register", this.regData)
        return this.cr.on("register", "system").map(data => {
            if (data.success) {
                appSettings.setString("token", data.token);
                this.parseJWT()
            }
            return data
        })
    }
}
