import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    CanLoad,
    ActivatedRouteSnapshot,
    NavigationExtras,
    Route,
    Router,
    RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        return null;
    }

    canActivateChild() {
        return null;
    }

    canLoad() {
        const url= ``;
        return this.checkLogin(url);
    }

    checkLogin(url: string): Observable<boolean> {
        return null;
    }


}