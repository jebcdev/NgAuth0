import { Routes } from '@angular/router';
import { PrivateLayout } from '@layouts/index';

export const privateRoutes: Routes = [
  {
    title: 'Private',
    path: '',
    component: PrivateLayout,
    children: [
      {
        title: 'Dashboard',
        path: '',
        loadComponent: () => import('@pages/private/private-dashboard-page'),
      },
      {
        title: 'Profile',
        path: 'profile',
        loadComponent: () => import('@pages/private/private-profile-page'),
      },
    ],
  },
];

export default privateRoutes;
