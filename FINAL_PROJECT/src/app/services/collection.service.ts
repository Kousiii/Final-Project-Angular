import { HttpClient } from '@angular/common/http';
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

}
