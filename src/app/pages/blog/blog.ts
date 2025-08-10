import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  imports: [CommonModule,TranslateModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
   posts = [
    {
      id: 1,
      title: 'The Characteristics of a Strong Man',
      summary: 'True strength comes from a balance of body, mind, and heart.',
      image: 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg'
    }
    // {
    //   id: 2,
    //   title: 'The Power of Discipline',
    //   summary: 'Consistency and focus can turn ordinary people into extraordinary achievers.',
    //   image: 'https://via.placeholder.com/600x400?text=Discipline'
    // },
    // {
    //   id: 3,
    //   title: 'Overcoming Fear',
    //   summary: 'Fear is natural, but courage is choosing to act despite it.',
    //   image: 'https://via.placeholder.com/600x400?text=Courage'
    // },
    // {
    //   id: 4,
    //   title: 'The Gift of Resilience',
    //   summary: 'Life will knock you down, but resilience gets you back up every time.',
    //   image: 'https://via.placeholder.com/600x400?text=Resilience'
    // },
    // {
    //   id: 5,
    //   title: 'Integrity in Action',
    //   summary: 'Doing the right thing, even when no one is watching, builds lasting respect.',
    //   image: 'https://via.placeholder.com/600x400?text=Integrity'
    // }
  ];

  constructor(private router: Router) {}

  openPost(id: number) {
    this.router.navigate(['/blog-detail', id]);
  }
}
