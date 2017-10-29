import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routing } from "./pages.routing";
import { PagesComponent } from "./pages.component";
import { PagesService } from "./pages.service";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AuthGuard } from "../auth.guard";


@NgModule({
    imports: [routing, NativeScriptFormsModule],
    declarations: [PagesComponent],
    providers: [
        PagesService,
        AuthGuard
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class PagesModule { }
