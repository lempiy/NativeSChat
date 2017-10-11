import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { routing } from "./chatroom.routing";
import { ChatroomComponent } from "./chatroom.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


@NgModule({
    imports: [routing, NativeScriptFormsModule, NativeScriptModule],
    declarations: [ChatroomComponent],
    providers: []
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class ChatroomModule { }
