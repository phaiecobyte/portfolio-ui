import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  navItems = [
    {
      label:'Home',
      icon:'fa-regular fa-home',
      routerLink:'home'
    },
    {
      label:'About',
      icon:'fa-regular fa-circle-user',
      routerLink:'about'
    },
    {
      label:'Contact',
      icon:'fa-regular fa-message',
      routerLink:'contact'
    }
  ]

}
