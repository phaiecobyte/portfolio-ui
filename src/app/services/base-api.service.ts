import { Injectable } from '@angular/core';
import { env } from '../../environment/env.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseApiService<T> {
  protected baseUrl = env.baseApiUrl; 

  constructor(
    protected http:HttpClient,
    protected endpoint:string
  ){}

  findAll():Observable<T>{
    return this.http.get<T>(`${this.baseUrl}${this.endpoint}`)
  }
}
