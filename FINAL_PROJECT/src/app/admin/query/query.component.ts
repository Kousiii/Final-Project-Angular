import { Component,Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReachusService } from 'src/app/services/reachus.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent {
  forumlist:any; 
  question:any; 
  id:any;
  answers:any;

        constructor(private router:Router,private ar:ActivatedRoute,private ts:ForumService){

          this.ts.getForum().subscribe(
           {
              next: (data:any)=> this.forumlist =data,
              error: ()=> this.forumlist=[]
            }
            )

        }
     
}
