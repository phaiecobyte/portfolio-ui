import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SafeUrlPipe } from '../../pipe/safe-url-pipe';
import { Project, ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  constructor(private service: ProjectService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.findAll().subscribe(
      (res:any)=>{
        this.projects = res;
        console.log("data", this.projects)
      }
    )
  }
}
