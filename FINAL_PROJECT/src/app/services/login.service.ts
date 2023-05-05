import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 constructor(private http:HttpClient) { }

 getCredential():Observable<any> {
   return this.http.get("http://localhost:4500/credential")
 }

 httpOptions:any;
  postCredential(obj:any):Observable<any>{

    this.httpOptions= new HttpHeaders({
      'Content-Type':'application.json',
    })
    return this.http.post("http://localhost:4500/credential",obj,this.httpOptions);
  }

}
