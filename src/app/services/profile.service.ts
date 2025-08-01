import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';

export interface ProfileModel{
  id:number
  firstName:string
  lastName:string
  bio:string
  position:string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseApiService<ProfileModel>{
  constructor(http:HttpClient){
    super(http,'profile')
  }
}
