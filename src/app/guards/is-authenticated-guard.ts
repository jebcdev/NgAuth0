import { CanMatchFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AppAuthService } from '@services/app-auth.service';
import { map } from 'rxjs';

export const isAuthenticatedGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AppAuthService);
  const router = inject(Router);

  return authService.isAuthenticated$.pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        // Redirect to login page if not authenticated
        // router.navigate(['/login']);
        authService.login();
        return false;
      }
      return true;
    })
  );
};
