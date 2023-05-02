import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private http:HttpClient) { }

  public doRegistration(user: any){
    return this.http.post("http://localhost:9090/api/auth/signup",user,{responseType:'text' as 'json'});
  }
}
