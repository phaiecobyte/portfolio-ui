import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit{
  constructor(
    private pageTitleService:PageTitleService
  ){}

  ngOnInit(): void {
      this.pageTitleService.setPageTitle('Dashboard')
  }

  dashboardCards = [
    { title: 'Projects', count: 8, icon: 'fas fa-code' },
    { title: 'Skills', count: 12, icon: 'fas fa-tools' },
    { title: 'Experience', count: 3, icon: 'fas fa-briefcase' },
    { title: 'Education', count: 2, icon: 'fas fa-graduation-cap' },
  ];
}
