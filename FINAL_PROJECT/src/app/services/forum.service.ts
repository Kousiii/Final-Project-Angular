import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ForumService {
questions:any;
resp:any;
  constructor(private http:HttpClient) { }
 getForum():Observable<any>
 {
  return this.http.get("http://localhost:4500/forum")
 }

 getForumById(id:string):Observable<any>
 {
  return this.http.get("http://localhost:4500/forum/"+id)
 }
 

  public postforum(obj:any):Observable<any>{
      this.questions=new HttpHeaders({
        'Content-Type':'application.json',
      })
      return this.http.post("http://localhost:4500/forum",obj,this.questions);
  }
  public postResponse(obj:any):Observable<any>{
    const resp=new HttpHeaders({
      'Content-Type':'application/json',
    })
    return this.http.put("http://localhost:4500/forum/"+obj.id,obj,{headers:resp});
}
}
