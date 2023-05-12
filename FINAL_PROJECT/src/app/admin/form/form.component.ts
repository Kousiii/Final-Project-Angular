import { Component } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import {FormControl} from '@angular/forms'
import { AddformService } from 'src/app/services/addform.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  theme:any;
  name:any;
  type:any;
  image:any;
  artist:any;
  price:any;
  sizeinch:any;
  errors:string[]=[];
  constructor(private hs:AddformService) { }

  // ngOnInit(): void {
  // }

  submit(){
    this.errors = []
    const fullPath=this.image;
    const file=fullPath.substring(fullPath.lastIndexOf("\\")+1);
    
    if(this.theme==undefined || this.theme.length<3)
      this.errors.push("Theme should be greater than 3 characters")
    if(this.name==undefined || this.name.length<3)
      this.errors.push("Name should be greater than 3 characters")
    if(this.artist==undefined )
      this.errors.push("Artist name is required")
    if(this.price==undefined )
      this.errors.push("Price is required")
    if(this.sizeinch==undefined )
      this.errors.push("Size is required")
    if(this.type==undefined)
      this.errors.push("First name should be greater than 3 characters")

      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          theme: this.theme,
          name: this.name,
          artist: this.artist,
          type: this.type,
          price:this.price,
          sizeinch:this.sizeinch,
          image:file

        }
        this.hs.postArtwork(obj).subscribe({
          next: ()=>{
            alert("Successfully Added Artwork.Thank you..")
            this.theme="",
            this.type="",
            this.name="",
            this.artist="",
            this.price="",
            this.image="",
            this.sizeinch=""
            
          },
          error: ()=>alert("There is a problem in adding this!")
        }
        )
      }
  }
 
}
