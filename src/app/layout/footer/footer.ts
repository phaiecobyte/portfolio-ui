import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  links=[
    {
      label:'nav.home',
      icon:'fa-regular fa-home',
      routerLink:'home'
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
  socials=[
    {
      icon:'fa-brands fa-linkedin',
      link:'https://www.linkedin.com/in/phai-%F0%9F%85%BF%EF%B8%8F-5178a5276/'
    },
    {
      icon:'fa-brands fa-tiktok',
      link:'https://www.tiktok.com/@phaiecobyte'
    },
    {
      icon:'fa-brands fa-github',
      link:'https://github.com/phaiecobyte'
    },
    {
      icon:'fa-brands fa-docker',
      link:'https://hub.docker.com/repositories/phaidocker'
    }
  ]
}
