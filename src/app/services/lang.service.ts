import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
export interface LanguageModel{
  id:number
  name:string
  icon:string
  level:number
}
@Injectable({
  providedIn: 'root'
})
export class LangService extends BaseApiService<LanguageModel>{
  constructor(http:HttpClient){
    super(http,'language')
  }
}
