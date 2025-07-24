import { Routes } from '@angular/router';
import { Main } from './layout/main/main';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((c) => c.About),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then((c) => c.Contact),
      },
      {
        path:'projects',
        loadComponent:()=>import('./pages/project/project').then(c=>c.Project)
      }
    ],
  },
];
