import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { AuthModule } from "./auth/auth.module";
import { PagesModule } from "./pages/pages.module";
import { NsModuleFactoryLoader } from "./shared/ns-loader.factory";

//Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ChatroomService } from "./shared/chatroom.service";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        AuthModule,
        PagesModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        AppComponent,
        
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NsModuleFactoryLoader },
        ChatroomService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
