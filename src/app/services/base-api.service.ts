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

  count():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}${this.endpoint}/count`)
  }

  findAll(page:number=0,size:number=10,sort:string='id,desc'):Observable<T>{
    const params:any ={page,size}
    if(sort) params.sort = sort;
    return this.http.get<T>(`${this.baseUrl}${this.endpoint}/pagination`,{params})
  }
  getById(id:number):Observable<T>{
    return this.http.get<T>(`${this.baseUrl}${this.endpoint}/${id}`);
  }
  create(data:T):Observable<T>{
    return this.http.post<T>(`${this.baseUrl}${this.endpoint}`,data)
  }
  update(id:number,data:T):Observable<T>{
    return this.http.put<T>(`${this.baseUrl}${this.endpoint}/${id}`,data)
  }
  delete(id:number){
    return this.http.delete<T>(`${this.baseUrl}${this.endpoint}/${id}`);
  }
}
