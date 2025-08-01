import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { SkillService } from '../../services/skill.service';
import { LangService } from '../../services/lang.service';
import { ExperienceService } from '../../services/experience.service';
import { ReferenceService } from '../../services/reference.service';
import { EduService } from '../../services/edu.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
  id:number=10;
  constructor(
    private pageTitleService:PageTitleService,
    private projectService:ProjectService,
    private skillService:SkillService,
    private eduService:EduService,
    private langService:LangService,
    private expService:ExperienceService,
    private refService:ReferenceService
  ){}

  ngOnInit(): void {
  this.pageTitleService.setPageTitle('Dashboard');

  this.projectService.count().subscribe(count => {
    this.dashboardCards[0].count = count;
  });

  this.skillService.count().subscribe(count => {
    this.dashboardCards[1].count = count;
  });

  this.expService.count().subscribe(count => {
    this.dashboardCards[2].count = count;
  });

  this.eduService.count().subscribe(count => {
    this.dashboardCards[3].count = count;
  });
}

dashboardCards = [
  { title: 'Projects', count: 0, icon: 'fas fa-code' },
  { title: 'Skills', count: 0, icon: 'fas fa-tools' },
  { title: 'Experience', count: 0, icon: 'fas fa-briefcase' },
  { title: 'Education', count: 0, icon: 'fas fa-graduation-cap' },
];

}
