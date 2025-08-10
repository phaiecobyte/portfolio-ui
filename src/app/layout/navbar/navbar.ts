import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule, TranslateModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  private languageService = inject(LanguageService);
  currentLang = this.languageService.getCurrentLang();
  collapseNavbar() {
    const el = document.getElementById('navbarSupportedContent');
    if (el?.classList.contains('show')) {
      el.classList.remove('show');
    }
  }

  navItems = [
    {
      label:'nav.home',
      icon:'fa-regular fa-home',
      routerLink:'home'
    },
    {
      label:'nav.projects',
      icon:'fa-solid fa-code',
      routerLink:'projects'
    },
    {
      label:'nav.knowledge',
      icon:'fa-solid fa-brain',
      routerLink:'blog'
    },
    {
      label:'nav.examResult',
      icon:'fa-solid fa-book',
      routerLink:'exam-result'
    },
    {
      label:'nav.about',
      icon:'fa-regular fa-circle-user',
      routerLink:'about'
    },
    {
      label:'nav.contact',
      icon:'fa-regular fa-message',
      routerLink:'contact'
    }
  ]

  switchLanguage(lang:string){
    this.currentLang = lang;
    this.languageService.setLanguage(lang);
  }

}
