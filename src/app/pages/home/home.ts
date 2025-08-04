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
  profileImage:any;
  myProfile:any;
  constructor(
    private myProfileService:ProfileService,
  ){}
  ngOnInit(): void {
    this.myProfileService.getById(1).subscribe(
      (res:any)=>{
        this.myProfileService.getProfileImage(1).subscribe((image:Blob)=>{
          this.profileImage = URL.createObjectURL(image);
        })
        this.myProfile = res
      })
  }   
  
}
