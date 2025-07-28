import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience implements OnInit{
  constructor(
    private pageTitleService:PageTitleService
  ){}
  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Experience')
  }
}
