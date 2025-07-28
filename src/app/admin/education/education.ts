import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education implements OnInit{
  constructor(
    private pageTitleService:PageTitleService
  ){}
  ngOnInit(): void {
      this.pageTitleService.setPageTitle('Education')
  }
}
