import { Injectable, RESPONSE_INIT } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ProfileModel{
  id:number
  firstName:string
  lastName:string
  bio:string
  position:string
  profileImage:string
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseApiService<ProfileModel>{
  constructor(http:HttpClient){
    super(http,'profile')
  }

  getProfileImage(id:number):Observable<Blob>{
    return this.http.get(`${this.baseUrl}profile/${id}/image`,{responseType:'blob'})
  }

  changeProfile(id:number,formData:FormData){
    return this.http.patch(`${this.baseUrl}profile/${id}/image`,formData, {responseType:'text'})
  }
  
}
