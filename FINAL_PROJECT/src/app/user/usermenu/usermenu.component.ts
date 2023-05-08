import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent {
  constructor(private router:Router,private ar:ActivatedRoute){}
collection(){
  this.router.navigate(['collection'],{relativeTo:this.ar})
}
home(){
  this.router.navigate(['home'],{relativeTo:this.ar})
}
reachus(){
  this.router.navigate(['reachus'],{relativeTo:this.ar})
}
logout(){
  this.router.navigate([])
}
}
