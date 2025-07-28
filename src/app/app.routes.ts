import { Routes } from '@angular/router';
import { Main } from './layout/main/main';
import { AdminMain } from './layout/admin-main/admin-main';

export const routes: Routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
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
        loadComponent:()=>import('./pages/project/project').then(c=>c.ProjectComponent)
      }
    ],
  },
  {
    path:'admin',
    component:AdminMain,
    children:[
      {
        path:'',
        loadComponent:()=>import('./admin/dashboard/dashboard').then(c=>c.Dashboard)
      },
      {
        path:'dashboard',
        loadComponent:()=>import('./admin/dashboard/dashboard').then(c=>c.Dashboard)
      },
      {
        path:'project',
        loadComponent:()=>import('./admin/project/project').then(c=>c.Project)
      },
      {
        path:'skill',
        loadComponent:()=>import('./admin/skill/skill').then(c=>c.Skill)
      },
      {
        path:'education',
        loadComponent:()=>import('./admin/education/education').then(c=>c.Education)
      },
      {
        path:'experience',
        loadComponent:()=>import('./admin/experience/experience').then(c=>c.Experience)
      },
      {
        path:'language',
        loadComponent:()=>import('./admin/language/language').then(c=>c.Language)
      },
      {
        path:'reference',
        loadComponent:()=>import('./admin/reference/reference').then(c=>c.Reference)
      }
    ]
  },
  {
    path:'login',
    loadComponent:()=>import('./pages/login/login').then(c=>c.Login)
  }
];
