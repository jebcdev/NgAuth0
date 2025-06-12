import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    title: 'Ng Auth 0',
    path: '',
    loadChildren: () => import('@routes/public.routes'),
  },
  {
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
