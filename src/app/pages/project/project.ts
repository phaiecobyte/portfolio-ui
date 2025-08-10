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
  projects: Project[] = [];
  features:Array<string> = [
    "Home, About, Blog, Contact, Exam Results, and Project pages.",
    "Admin dashboard for managing blog posts, profile, skills, and more.",
    "Secure login for admin access.",
    "Reusable UI components and custom pipes.",
    "Mobile-friendly, responsive design with Bootstrap."
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
