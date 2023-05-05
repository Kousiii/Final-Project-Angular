import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
  questionlist:any;
   constructor(private router:Router,private ar:ActivatedRoute,private ps:ForumService){
   
    this.ps.getForum().subscribe(
      {
          next: (data:any)=> this.questionlist =data,
          error: ()=> this.questionlist=[]
      }
    )
   }
   
}
