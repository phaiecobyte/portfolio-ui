import { Component, OnInit } from '@angular/core';
import { BlogPostModel, BlogPostService } from '../../services/blog-post.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PageTitleService } from '../../services/page-title.service';
import { StaticBackDropModal } from "../../components/static-backdrop-modal";
import { InputComponent } from '../../components/input';
import { QuillModule } from 'ngx-quill';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NzFormLabelComponent, NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, CommonModule, StaticBackDropModal,QuillModule,ReactiveFormsModule,NzFormModule, NzInputModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog implements OnInit{
  form!:FormGroup;
  blogPosts:BlogPostModel[]=[];
  constructor(
    private blogService:BlogPostService,
    private pageTitleService:PageTitleService,
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.pageTitleService.setPageTitle('Blog')
    this.blogService.getPosts().subscribe(data=>this.blogPosts=data)
  }

  submitForm(){
    
  }
}
