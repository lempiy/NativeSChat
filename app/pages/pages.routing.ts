import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular/router";

// noinspection TypeScriptValidateTypes


export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'chatroom', pathMatch: 'full' },
      { path: 'chatroom', loadChildren: '/pages/chatroom/chatroom.module#ChatroomModule' },
    ]
  },
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(routes);
