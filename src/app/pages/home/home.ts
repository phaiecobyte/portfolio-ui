import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  constructor(
    private router:Router
  ){}
  ngOnInit(): void {
    
  }   
  
  myProfile={
    "firstName":"Phai",
    "position":"Java Developer",
    "bio":"Welcome to my personal portfolio website!. I am passionate about creating innovative solutions and continuously improving my skills in software development.",
  }
  goToProject(){
    this.router.navigate(['/projects'])
  }
  gotToContact(){
    this.router.navigate(['/contact']);
  }
  
}
