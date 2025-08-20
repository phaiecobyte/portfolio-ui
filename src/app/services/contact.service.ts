import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

export interface ContactModel{
  id:number
  name:string
  email:string
  content:string
}

@Injectable({
  providedIn: 'root'
})
export class ContactService extends BaseApiService<ContactModel>{
  constructor(http:HttpClient){
    super(http,'contact')
  }
}
