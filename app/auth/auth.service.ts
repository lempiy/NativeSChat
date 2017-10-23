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
        this.cr.connect()
            .switchMap(() => this.cr.on("session", "system"))
            .subscribe(data => {
                if (data.token != this.getToken()) {
                    appSettings.setString("token", data.token);
                }
            })
    }
    //
    
    getToken() {
        return appSettings.getString("token", "No string value");
    }
    
    authorize() {
        this.cr.sendEvent("login", this.loginData)
        return this.cr.on("login", "system").map(data => {
            if (data.success) {
                appSettings.setString("token", data.token);
            }
            return data
        })
    }
    register() {
        this.cr.sendEvent("register", this.regData)
        return this.cr.on("register", "system").map(data => {
            if (data.success) {
                appSettings.setString("token", data.token);
            }
            return data
        })
    }
}
