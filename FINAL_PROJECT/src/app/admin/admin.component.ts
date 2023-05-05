import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
constructor(private router:Router,private ar:ActivatedRoute){}
button(){
  this.router.navigate(['form'],{relativeTo:this.ar})
}
button1(){
  this.router.navigate(['form1'],{relativeTo:this.ar})
}
}
