import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface BlogPostModel{
  id:number
  title:string
  content:string
  date:Date
}
@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private posts:BlogPostModel[]=[
    {
      id:1,
      title:'First Post',
      content:'This is my first blog post',
      date: new Date()
    }
  ]

   getPosts(): Observable<BlogPostModel[]> {
    return of(this.posts);
  }
  getPostById(id: number): Observable<BlogPostModel | undefined> {
    return of(this.posts.find(p => p.id === id));
  }

  addPost(post: BlogPostModel) {
    post.id = this.posts.length + 1;
    this.posts.push(post);
  }
}


