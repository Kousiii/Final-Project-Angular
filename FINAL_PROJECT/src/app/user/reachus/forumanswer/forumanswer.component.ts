import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forumanswer',
  templateUrl: './forumanswer.component.html',
  styleUrls: ['./forumanswer.component.css']
})
export class ForumanswerComponent {
  id:any;
  forum:any;
  question:any;
  response:any;
  constructor(private ds:ForumService,private ar:ActivatedRoute){
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
   this.ds.getForumById(this.id).subscribe({
   next: (data:any)=> this.forum=data,
   error: ()=> this.forum= {}
   }) 
  }
  AddResponse(res:string){
   if (this.forum && this.forum.answers){
   this.forum.answers.push(res);
   this.ds.postResponse(this.forum).subscribe(
   {
   next:(data:any)=>{
   alert("Text posted");
   location.reload();
   },
   error:(error)=>alert("Text not posted")
   });
   }
  
  }
  
}
