import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http:HttpClient) { }

  getCollections():Observable<any>{
    return this.http.get("http://localhost:4500/artworks/")
  }
  
  getCollectionsById(id: number): Observable<any>{
    return this.http.get("http://localhost:4500/artworks/" + id);
  }

  getReviews():Observable<any>{
    return this.http.get("http://localhost:4500/reviews/")
  }
  //delete
  deleteArt(id:number):Observable<any>{
    return this.http.delete("http://localhost:4500/artworks/" +id);
  }

  //update
  updateArt(id:number,element:any):Observable<any>
  {
    return this.http.put("http://localhost:4500/artworks/"+id,element);
  }

  

}
