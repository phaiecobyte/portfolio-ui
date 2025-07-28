import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

export interface SkillModel{
  id:number;
  name:string;
  icon:string;
  level:number;
}

@Injectable({
  providedIn: 'root'
})
export class SkillService extends BaseApiService<SkillModel>{
  constructor(http:HttpClient){
    super(http,'skill') 
  }
}
