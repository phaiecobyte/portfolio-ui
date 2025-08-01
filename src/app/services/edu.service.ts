import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

export interface EduModel{
  id:number;
  degree:string;
  major:string;
  school:string;
  startDate:string;
  endDate:string;
  address:string;
}

@Injectable({
  providedIn: 'root'
})
export class EduService extends BaseApiService<EduModel>{
  constructor(http:HttpClient){
    super(http,'edu')
  } 
}
