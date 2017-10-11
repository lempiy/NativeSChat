import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
const appSettings = require("application-settings");

declare var android: any;
declare var java: any;

class LoginData {
    login: string;
    password: string;
}

@Injectable()
export class AuthService {
    loginData: LoginData;
    constructor() {
        this.loginData = {
            login: "",
            password: "",
        }
    }

    getToken() {
        return appSettings.getString("login", "No string value");
    }
    
    authorize() {
        const json = JSON.stringify(this.loginData)
        appSettings.setString("login", json);
    }
}
