import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent {
 elementId!:number;
 artdata:any;
 editfunction={
  theme:"",name:"",artist:"",price:"",type:"",sizeinch:"",image:""
}

  constructor(private ar:ActivatedRoute,private rr:Router,private hs:CollectionService){}

  ngOnInit():void{
    this.ar.paramMap.subscribe((param:Params)=>{
      this.elementId=param['get']('id');

    })
    this.hs.getCollectionsById(this.elementId).subscribe((data:any)=>
    {
      this.artdata=data;
    })
  }
  // update()
  // {
  //   this.hs.updateArt(this.editfunction).subscribe(()=>
  //   {
  //     this.rr.navigate(["/"])
  //   })
  // }
  // update(){
  //   this.hs.updateArt(this.editfunction).subscribe(
  //     (resp) => {
  //       console.log(resp);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
}
