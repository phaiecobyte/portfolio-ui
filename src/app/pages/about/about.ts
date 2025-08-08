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
    "position":"Web Fullstack Developer",
    "bio":"I'm a recent graduate from Build Bright University and currently interning as a Full-Stack Web Developer using ASP.NET MVC. I'm passionate about building innovative and practical solutions, with a strong interest in contributing to open-source projects. 🔭 Currently focused on backend development using .NET technologies 🌱 Learning Spring Boot and Microservice Architecture 💡 Constantly exploring new technologies, clean code practices, and scalable system design 🤝 Enjoy sharing knowledge and collaborating with the developer community"
  }
  contacts = [
    {name:'phaiecobyte@gmail.com', icon:'fa-regular fa-envelope'},
    {name:'phaiecobyte', icon:'fa-brands fa-github', link:'https://github.com/phaiecobyte'},
    {name:'@phaiecobyte', icon: 'fa-brands fa-telegram', link:'https:://t.me/@phaiecobyte'},
    {name:'phaiecobyte', icon:'fa-brands fa-linkedin', link:''},
    {name:'phaiecobyte', icon:'fa-brands fa-tiktok', link:''},
  ]
  educations = [
    {degree:`Bachelor's degree in`,major:'Information and Technology', startDate:'2022', endDate:'2025', schoolName:'Build Bright University', address:'Phnom Penh | Cambodia'},
    {degree:`General Education`,major:'', startDate:'2019', endDate:'2022', schoolName:'Preah Soramrith Buddhist High School', address:'Phnom Penh | Cambodia'}
  ]
  skills = [
    { name: '.Net Framework', icon: 'fa-solid fa-code', level: 90 },
    { name: 'JavaScript', icon: 'fa-brands fa-js', level: 70 },
    { name: 'Angular', icon: 'fa-brands fa-angular', level: 90 },
    { name: 'TypeScript', icon: 'fa-solid fa-code', level: 85 },
    { name: 'Spring Boot', icon: 'fa-brands fa-java', level: 80 },
    { name: 'Laravel', icon: 'fa-brands fa-php', level: 75 },
    { name: 'Docker', icon: 'fa-brands fa-docker', level: 70 },
    { name: 'Git', icon: 'fa-brands fa-git', level: 80 }
  ];

  experiences=[
    {position:'Web FullStack Developer', company:'MIS', type:'', startDate:'2025', endDate:'Present', description:'Developed multiple web applications for clients using ASP.NET MVC and JavaScript.'},
  ]

  languages = [
    { name: 'Khmer', icon: 'fi fi-kh', level: 100 },
    { name: 'English', icon: 'fi fi-sh', level: 60 }
  ];

 
}
