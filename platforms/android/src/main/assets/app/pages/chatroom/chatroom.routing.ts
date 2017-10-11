import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from './chatroom.component';
import { ModuleWithProviders } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular/router";

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'chatroom',
    pathMatch: 'full'
  },
  {
    path: 'chatroom',
    component: ChatroomComponent,
  },
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(routes);
