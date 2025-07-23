import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./layout/main/main').then(c=>c.Main)
    }
];
