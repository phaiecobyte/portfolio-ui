import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { PageTitleService } from '../../services/page-title.service';
import { NzContentComponent, NzFooterComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent } from 'ng-zorro-antd/layout';
import { NzBreadCrumbComponent, NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BtnTriggerComponent } from "../../components/btn-modal-trigger";

@Component({
  selector: 'app-admin-main',
  imports: [
    CommonModule,
    NzLayoutComponent,
    NzFooterComponent,
    NzHeaderComponent,
    NzSiderComponent,
    NzContentComponent,
    NzBreadCrumbComponent,
    NzIconModule,
    NzBreadCrumbModule,
    RouterModule,
    BtnTriggerComponent
],
  templateUrl: './admin-main.html',
  styleUrl: './admin-main.css'
})
export class AdminMain{
  isCollapsed = false;
  constructor(public pageTitleService:PageTitleService){}

  items = [
    { 
      label: 'Dashboard', 
      icon: 'fa-solid fa-home', 
      routeLink: '/admin/dashboard'
    },
    {
      label:'Profile',
      icon:'fa-solid fa-user',
      routeLink:'/admin/profile'
    },
    { 
      label: 'Project', 
      icon: 'fa-solid fa-code', 
      routeLink: '/admin/project' 
    },
    { 
      label: 'Skill', 
      icon: 'fa-solid fa-brain', 
      routeLink: '/admin/skill' 
    },
    {
      label: 'Education',
      icon:'fa-solid fa-school',
      routeLink:'/admin/education'
    },
    { 
      label: 'Language', 
      icon: 'fa-solid fa-language', 
      routeLink: '/admin/language' 
    },
    {
      label:'Experience',
      icon:'fa-solid fa-briefcase',
      routeLink:'/admin/experience'
    },
    {
      label:'Reference',
      icon:'fa-solid fa-handshake',
      routeLink:'/admin/reference'
    },
    {
      label:'Back Home',
      icon:'fa-solid fa-backward-step',
      routeLink:'/'
    }
  ]
  
}
