import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent  {
  id:any;
  details:any;
  reviews:any;
 constructor(private hs:CollectionService,private ar:ActivatedRoute){
 
    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['id']
         this.readData()
        },
        error: () => this.id = 0
      }
    )
 }

 readData(){

    this.hs.getCollectionsById(this.id).subscribe({
        next: (data:any)=> this.details =data,
        error: ()=> this.details = {}
    })

    this.hs.getReviews().subscribe({
      next:(data:any)=>this.reviews=data,
      error:()=>this.reviews=[]
    })
    
 }

 

}


