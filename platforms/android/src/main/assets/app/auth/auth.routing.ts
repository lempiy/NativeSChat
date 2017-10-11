import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ModuleWithProviders } from '@angular/core';
import { NativeScriptRouterModule } from "nativescript-angular/router";

// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
];

export const routing: ModuleWithProviders = NativeScriptRouterModule.forChild(routes);
