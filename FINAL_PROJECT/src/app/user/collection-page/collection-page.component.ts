import { Component } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent {
  min:number=0;
  max:number=1000;
  cardlist:any;
 
  constructor(private ps:CollectionService){
   this.ps.getCollections().subscribe(
     {
       next:(data:any)=>{
        this.cardlist=data;
      

      },
       error:()=>{
        this.cardlist=[];
        
      }
     }
   )
  }
   themes:string[]=[
     "All",
     "Nature",
     "Cool",
     "Creative",
     "Dot Mandala",
     "Brush Strokes",
     "Music",
     "Fantasy"
    ]
   type:string="All";
   selected:string="All";
  
 
   artists:string[]=[
     "All",
     "Emimal John",
     "Bhageera",
     "Ramesh Ganesan",
     "Nalini Koush",
     "Nithya Kalyani"
    ]
   type1:string="All";
 
   artypes:string[]=[
     "All",
     "Pastel on paper",
     "Oil Pastel on paper",
     "Oil on canvas"
    ]
    type2:string="All";

   
 }

