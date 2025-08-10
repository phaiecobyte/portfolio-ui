import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetail {
  post: any;
  private allPosts = [
    {
      id: 1,
      title: 'The Characteristics of a Strong Man',
      image: 'https://images.pexels.com/photos/1196338/pexels-photo-1196338.jpeg'
    }
  ];
  

  constructor(private route: ActivatedRoute,private router:Router) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.allPosts.find(p => p.id === id);
  }
  goBack(){
    this.router.navigate(['/blog']);
  }
}
