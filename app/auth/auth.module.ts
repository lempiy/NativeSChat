import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routing } from "./auth.routing";
import { AuthComponent } from "./auth.component";
import { RegComponent } from "./reg.component";
import { AuthService } from "./auth.service";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";


@NgModule({
    imports: [routing, NativeScriptFormsModule, NativeScriptRouterModule],
    declarations: [AuthComponent, RegComponent],
    providers: [
        AuthService,
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AuthModule { }
