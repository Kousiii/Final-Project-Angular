import { Component ,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
 @Input() quest:any; 

 constructor(private router:Router,private ar:ActivatedRoute){}
 
}
