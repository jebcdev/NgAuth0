import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from '@guards/is-authenticated-guard';
export const routes: Routes = [
  {
    title: 'Ng Auth 0',
    path: '',
    loadChildren: () => import('@routes/public.routes'),
  },
  {
    canMatch:[isAuthenticatedGuard],
    title: 'Private',
    path: 'private',
    loadChildren: () => import('@routes/private.routes'),
  },
  {
    title: 'Not Found',
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
