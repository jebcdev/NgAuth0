import { inject, Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  private _auth0Service: Auth0Service = inject(Auth0Service);

  public login(): void {
    this._auth0Service.loginWithPopup();
  }
}
