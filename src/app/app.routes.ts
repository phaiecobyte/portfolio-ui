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
        path:'blog',
        loadComponent:()=>import('./pages/blog/blog').then(c=>c.Blog)
      },
      {
        path:'blog-detail/:id',
        loadComponent:()=>import('./pages/blog-detail/blog-detail').then(c=>c.BlogDetail)
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
      },
      {
        path:'exam-result',
        loadComponent:()=>import('./pages/exam-result/exam-result').then(c=>c.ExamResult)
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
        path:'blog',
        loadComponent:()=>import('./admin/blog/blog').then(c=>c.Blog)
      },
      {
        path:'blog/:id',
        loadComponent:()=>import('./admin/blog-detail/blog-detail').then(c=>c.BlogDetail)
      },
      {
        path:'dashboard',
        loadComponent:()=>import('./admin/dashboard/dashboard').then(c=>c.Dashboard)
      },
      {
        path:'profile',
        loadComponent:()=>import('./admin/profile/profile').then(c=>c.Profile)
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
