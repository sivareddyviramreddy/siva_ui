import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url=''
  constructor(private http:HttpClient) { }
  enroll(data:User){
   return this.http.post<any>(this.url,data)
  }
}
