import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

export interface ExperienceModel{
  id:number
  position:string
  startDate:string
  endDate:string
  description:string
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService extends BaseApiService<ExperienceModel>{
  constructor(http:HttpClient){
    super(http,'experience')
  } 
}
