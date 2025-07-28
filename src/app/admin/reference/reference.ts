import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-reference',
  imports: [],
  templateUrl: './reference.html',
  styleUrl: './reference.css'
})
export class Reference implements OnInit{
  constructor(
    private pageTitleService:PageTitleService
  ){}
  ngOnInit(): void {
      this.pageTitleService.setPageTitle('Reference');
  }
}
