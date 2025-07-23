import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { en_US, km_KH, NzI18nService } from 'ng-zorro-antd/i18n';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translate = inject(TranslateService); 
  private i18n = inject(NzI18nService);

  private currentLangSubject = new BehaviorSubject<string>('en');
  currentLang$ = this.currentLangSubject.asObservable();

    constructor() {
    // Initialize with stored language or browser language
    const storedLang = localStorage.getItem('preferredLanguage');
    const browserLang = this.translate.getBrowserLang();
    const defaultLang = storedLang || (browserLang && ['en', 'km'].includes(browserLang) ? browserLang : 'en');
    
    this.translate.setDefaultLang('en');
    this.setLanguage(defaultLang);
  }

  setLanguage(lang: string) {
    this.currentLangSubject.next(lang);
    this.translate.use(lang);

    // Update ng-zorro locale
    switch(lang) {
      case 'km':
        this.i18n.setLocale(km_KH);
        break;
      case 'en':
      default:
        this.i18n.setLocale(en_US);
        break;
    }

    localStorage.setItem('preferredLanguage', lang);
  }

  getCurrentLang(): string {
    return this.currentLangSubject.value;
  }

}
