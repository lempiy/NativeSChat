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
            this.parseJWT(this.getToken())
        }
        this.cr.connect()
            .switchMap(() => this.cr.on("session", "system"))
            .subscribe(data => {
                if (data.token != this.getToken()) {
                    appSettings.setString("token", data.token);
                    this.parseJWT(data.token)
                }
            })
    }
    
    getToken() {
        return appSettings.getString("token", "");
    }

    private parseJWT(token: string) {
        if (!token) {
            return
        }
        let base64Url = token.split('.')[1];
        const text = new java.lang.String(base64Url);
        const data = text.getBytes("UTF-8");
        const base64Decoded = new java.lang.String(android.util.Base64.decode(data, android.util.Base64.NO_WRAP), "UTF-8");
        this.parsedJWT = JSON.parse(base64Decoded);
        console.dir(this.parsedJWT)
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
                this.parseJWT(data.token)
            }
            return data
        })
    }
    logout() {
        this.cr.sendEvent("logout", null)
        return this.cr.on("logout", "system").map(data => {
            console.log(data, 2)
            appSettings.setString("token", data);
            this.parseJWT(data)
            return data
        })
    }
    register() {
        this.cr.sendEvent("register", this.regData)
        return this.cr.on("register", "system").map(data => {
            if (data.success) {
                appSettings.setString("token", data.token);
                this.parseJWT(data.token)
            }
            return data
        })
    }
}
