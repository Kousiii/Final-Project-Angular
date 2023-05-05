import { Component,ViewChild,ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  @ViewChild('slideshow') slideshow!:ElementRef;
  imagelist=
 [
   "http://localhost/i2.jpg","http://localhost/i3.jpg","http://localhost/i6.jpg"
 ]
 currentIndex=0;
 ngOnInit(){
   setInterval(()=>{
     this.slideshow.nativeElement.src=this.imagelist[this.currentIndex];
     this.currentIndex=(this.currentIndex+1)%this.imagelist.length;
   },5000);
 }
}
