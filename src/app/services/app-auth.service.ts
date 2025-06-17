import { inject, Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  private _auth0Service: Auth0Service = inject(Auth0Service);

  public user$ = this._auth0Service.user$;
  public isAuthenticated$ = this._auth0Service.isAuthenticated$;
  public isLoading$ = this._auth0Service.isLoading$;

  public login(): void {
    this._auth0Service.loginWithRedirect();
  }

  public logout(): void {
    this._auth0Service.logout();
  }
}
