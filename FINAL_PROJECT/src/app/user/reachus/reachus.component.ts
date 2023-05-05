import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';
import { ReachusService } from 'src/app/services/reachus.service';


@Component({
  selector: 'app-reachus',
  templateUrl: './reachus.component.html',
  styleUrls: ['./reachus.component.css']
})
export class ReachusComponent {
  reachuslist:any;
  forumlist:any; 
  question:any; 
  id:any;
  answers:any;
  

        constructor(private cs:ReachusService,private router:Router,private ar:ActivatedRoute,private ts:ForumService){

          this.cs.getLocation().subscribe(
             {
               next: (data:any)=>this.reachuslist = data,
               error: ()=> this.reachuslist = []
             }
          )

          this.ts.getForum().subscribe(
           {
              next: (data:any)=> this.forumlist =data,
              error: ()=> this.forumlist=[]
            }
            )

          
        }
       
        AddQuestion()
        {
          var ques:any={
            id:this.forumlist.length+1,
            question:this.question,
            answers:[]
        }
          this.ts.postforum(ques).subscribe(
            {
              next:(ques:any)=>{
                alert("Your Question is posted to forum.");
                location.reload();
              },
              error:(error)=>alert("Error in posting your Question.")
            }
          )
        }


// searchTerm: any;
// items=["item1","item2","item3"]
// get filteredItems() {
//   return this.items.filter(item => item.includes(this.searchTerm));
// }

}
    


