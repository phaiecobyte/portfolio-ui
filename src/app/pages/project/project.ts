import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SafeUrlPipe } from '../../pipe/safe-url-pipe';
import { Project, ProjectService } from '../../services/project.service';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent implements OnInit {
  isLoading:boolean=true;
  projects:Project[]=[
    {
      id:1,
      name:'Personal Portfolio Website',
      description:'A personal portfolio website to showcase my projects, skills, and experiences as a developer.',
      tech:['Spring Boot','PostgreSQL','Angular','Bootstrap','Docker'],
      sourceCodeUrl:'https://github.com/phaiecobyte/portfolio-ui',
      demoVideoUrl:'https://www.youtube.com/embed/VyyFZ0bywdg',
      createdAt:'',
      createdBy:'',
      updatedAt:'',
      updatedBy:''
    }
  ];
  features:Array<string> = [
    'Responsive Design: The website is designed to be fully responsive, ensuring optimal viewing experience across various devices, including desktops, tablets, and mobile phones.',
  ]
  constructor(private service: ProjectService,private alertService:AlertService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.isLoading = true;
    this.service.findAll().subscribe({
      next:(res:any)=>{
        this.isLoading = false;
        this.projects = res.content;
        console.log("data", this.projects)
      },
      error:()=>{
        this.isLoading = false;
        this.alertService.showError()
      }
    });
  }

    
}
