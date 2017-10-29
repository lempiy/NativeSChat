import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AuthGuard } from "../auth.guard";

// noinspection TypeScriptValidateTypes


export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'chatroom', pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'chatroom', loadChildren: '/pages/chatroom/chatroom.module#ChatroomModule', canActivate: [AuthGuard] },
    ]
  },
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(routes);
