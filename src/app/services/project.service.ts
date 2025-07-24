import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

export interface Project {
  id: number
  name: string
  description: string
  tech: string[]
  sourceCodeUrl: string
  demoVideoUrl: string
  createdAt: string
  createdBy: string
  updatedAt: string
  updatedBy: string
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseApiService<Project>{
  constructor(http:HttpClient){
    super(http,"project")
  }
}
