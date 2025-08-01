import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

export interface ReferenceModel{
  id:number
  name:string
  phone:string
  email:string
  address:string
}

@Injectable({
  providedIn: 'root'
})
export class ReferenceService extends BaseApiService<ReferenceModel>{
  constructor(http:HttpClient){
    super(http,'reference')
  } 
}
