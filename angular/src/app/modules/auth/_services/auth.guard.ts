import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private oauthService: OAuthService, private authService: AuthService) {}

  canActivate(): Observable<boolean> | boolean | UrlTree {
    const hasValidAccessToken = this.oauthService.hasValidAccessToken();
    if (hasValidAccessToken) {
      return true;
    }

    this.authService.logout();
    return false;
  }
}
