import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit{
  ngOnInit(): void {
      
  }
  profileImage='./phai.jpg'
  myProfile={
    "firstName":"Phai",
    "lastName":"Ecobyte",
    "position":"Junior Java Developer",
    "bio":"Welcome to my personal portfolio website!",
  }
  contacts = [
    // {name:'phaiecobyte@gmail.com', icon:'fa-regular fa-envelope'},
    {name:'phaiecobyte', icon:'fa-brands fa-github', link:'https://github.com/phaiecobyte'},
    // {name:'@phaiecobyte', icon: 'fa-brands fa-telegram', link:'https:://t.me/@phaiecobyte'},
    {name:'phaiecobyte', icon:'fa-brands fa-youtube', link:'https://www.youtube.com/@phaiecobyte'},
    {name:'phaiecobyte', icon:'fa-brands fa-tiktok', link:''},
  ]
  educations = [
    {degree:`Bachelor's degree in`,major:'Information and Technology', startDate:'2022', endDate:'2025', schoolName:'Build Bright University', address:'Phnom Penh | Cambodia'},
    {degree:`General Education`,major:'', startDate:'2019', endDate:'2022', schoolName:'Preah Soramrith Buddhist High School', address:'Phnom Penh | Cambodia'}
  ]
  skills = [
    { name: 'Spring Boot', icon: 'fa-brands fa-java', level: 80 },
    { name: 'Laravel', icon: 'fa-brands fa-php', level: 50 },
    { name: '.Net Framework', icon: 'fa-solid fa-code', level: 70},
    { name: 'JavaScript', icon: 'fa-brands fa-js', level: 70 },
    { name: 'Angular', icon: 'fa-brands fa-angular', level: 80 },
    { name: 'Reactjs', icon: 'fa-brands fa-react', level: 50 },
    { name: 'TypeScript', icon: 'fa-solid fa-code', level: 85 },
    { name: 'Docker', icon: 'fa-brands fa-docker', level: 70 },
    { name: 'Git', icon: 'fa-brands fa-git', level: 80 }
  ];

  experiences=[
    {position:'Java Developer', company:'GDCE | Phnom Penh', type:'', startDate:'2025', endDate:'Present', description:'Develope, fix bugs and improve java applications .Research new technologies and improve performance and security of existing systems.'},
  ]

  languages = [
    { name: 'Khmer', icon: 'fi fi-kh', level: 100 },
    { name: 'English', icon: 'fi fi-sh', level: 50 }
  ];

 
}
