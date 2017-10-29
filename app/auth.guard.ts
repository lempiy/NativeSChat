import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private auth:AuthService, private router:Router){

    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.auth.isLoggedIn()) {
            return true;
        } else {
            console.log("User is not authorized")
            this.router.navigate(['/auth']);
            return false;
        }
    }
}
