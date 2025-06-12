import { Routes } from '@angular/router';
import { PublicLayout } from '@layouts/index';

export const publicRoutes: Routes = [
  {
    title: 'Ng Auth 0',
    path: '',
    component: PublicLayout,
    children: [
      {
        title: 'Home',
        path: '',
        loadComponent: () => import('@pages/public/public-home-page'),
      },
      {
        title: 'About',
        path: 'about',
        loadComponent: () => import('@pages/public/public-about-page'),
      },
    ],
  },
];

export default publicRoutes;
