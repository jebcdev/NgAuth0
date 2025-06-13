import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
/*  */
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '@env/environment';
/*  */

const { auth0domain, auth0clientId } = environment;
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    /*  */
    provideAuth0({
      domain: auth0domain,
      clientId: auth0clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
