import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { date } from 'yup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:4000'

  Login(data:any){
    return this.http.post(this.apiurl+'/login',data,{
      headers:  {
         "Content-Type": "application/json" 
        },
    })
  }
  

  
  ProcessRegister(data:any){
    return this.http.post(this.apiurl+'/register',data,{
      headers:  {
        "Content-Type": "application/json" 
       },
    })
  }

  // UpdateRegister(data:any){
  //   return this.http.post(this.apiurl+'/register',data)
  // }

}
