import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";


const routes: Routes = [
    { path: "", redirectTo: 'pages', pathMatch: "full" },
    { path: "auth", redirectTo: 'auth' },
    { path: '**', redirectTo: 'pages' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }