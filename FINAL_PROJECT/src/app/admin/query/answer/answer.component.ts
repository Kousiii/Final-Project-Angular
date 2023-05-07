import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
@Input() ques:any;
constructor(private router:Router,private ar:ActivatedRoute){}
forum(id:number)
{
  this.router.navigate(['forum', id],{relativeTo:this.ar});
}
}
