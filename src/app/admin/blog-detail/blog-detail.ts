import { Component, OnInit } from '@angular/core';
import { BlogPostModel, BlogPostService } from '../../services/blog-post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css'
})
export class BlogDetail implements OnInit{
  post?:BlogPostModel;

  constructor(
    private route:ActivatedRoute,
    private blogPostService:BlogPostService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogPostService.getPostById(id).subscribe(post => this.post = post);
  }

}
