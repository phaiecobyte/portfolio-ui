import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  profileImage:string='./phaiecobyte.svg';
  myProfile={
    "firstName":"Phai",
    "position":"Web Fullstack Developer",
    "bio":"I'm a recent graduate from Build Bright University and currently interning as a Full-Stack Web Developer using ASP.NET MVC. I'm passionate about building innovative and practical solutions, with a strong interest in contributing to open-source projects. 🔭 Currently focused on backend development using .NET technologies 🌱 Learning Spring Boot and Microservice Architecture 💡 Constantly exploring new technologies, clean code practices, and scalable system design 🤝 Enjoy sharing knowledge and collaborating with the developer community"
  }
  constructor(
    private myProfileService:ProfileService,
  ){}
  ngOnInit(): void {
    
  }   
  
}
