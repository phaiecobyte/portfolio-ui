import { Component } from '@angular/core';
import { icons } from '../../icons-provider';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  contacts = [
    {name:'phaiecobyte@gmail.com', icon:'fa-regular fa-envelope'},
    {name:'phaiecobyte', icon:'fa-brands fa-github', link:'https://github.com/phaiecobyte'},
    {name:'@phaiecobyte', icon: 'fa-brands fa-telegram', link:'https:://t.me/@phaiecobyte'},
    {name:'phaiecobyte', icon:'fa-brands fa-linkedin', link:''},
    {name:'phaiecobyte', icon:'fa-brands fa-tiktok', link:''},
  ]
  education = [
    {degree:`Bachelor's degree in`,mejor:'Information and Technology', startDate:'2022', endDate:'2025', schoolName:'Build Bright University', address:'Phnom Penh | Cambodia'},
    {degree:`General Education`,mejor:'', startDate:'2019', endDate:'2022', schoolName:'Preah Soramrith Buddhist High School', address:'Phnom Penh | Cambodia'}
  ]
  skills = [
    { name: 'Angular', icon: 'fa-brands fa-angular', percent: 90 },
    { name: 'TypeScript', icon: 'fa-solid fa-code', percent: 85 },
    { name: 'Spring Boot', icon: 'fa-brands fa-java', percent: 80 },
    { name: 'Laravel', icon: 'fa-brands fa-php', percent: 75 },
    { name: 'Docker', icon: 'fa-brands fa-docker', percent: 70 }
  ];

  experiences=[
    {position:'Freelance Web Developer', company:'', type:'', startDate:'2024', endDate:'Present', description:'Developed multiple web applications for clients using Angular, Spring Boot, and Laravel.'},
    {position:'Backend Developer', company:'MIS (Tech Solution)',type:'Intern',  startDate:'2025', endDate:'Present', description:'Developed multiple web applications for clients using Asp.net Core Web Api.'}
  ]

  languages = [
    { name: 'Khmer', icon: 'fi fi-kh', percent: 100 },
    { name: 'English', icon: 'fi fi-sh', percent: 60 }
  ];

  // Replace with API call in ngOnInit when ready
}
