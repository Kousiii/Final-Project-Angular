import { Component } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { ReviewService } from 'src/app/services/review.service';
import {FormControl} from '@angular/forms'
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-reviewform',
  templateUrl: './reviewform.component.html',
  styleUrls: ['./reviewform.component.css']
})
export class ReviewformComponent {
  fname:any;
  email:any;
  name:any;
  message:any;
  errors:string[]=[];
  constructor(private hs:ReviewService, private cs:CollectionService) {
    this.cs.getCollections().subscribe({
      next:(data:any)=>{
        this.options=data.map((item:any)=>item.name)
      },
      error:()=>this.options=[]
    })
   }

  // ngOnInit(): void {
  // }

  submit(){
    this.errors = []

    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greater than 3 characters")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.name==undefined || this.name.length<3)
      this.errors.push("Select from the list")
    if(this.message==undefined || this.message.length<30)
      this.errors.push("Message should be greater than 30 characters")

      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          email: this.email,
          name: this.name,
          message: this.message

        }
        this.hs.postReview(obj).subscribe({
          next: ()=>{
            alert("You review is posted.Thank you..")
            this.fname="",
            this.email="",
            this.name="",
            this.message="",
            location.reload();
          },
          error: ()=>alert("There is a problem posting your review!")
        }
        )
      }
  }
  // options:any=[
  //   "Bluetiful",
  //   "Big Blue beauty",
  //   "Beauty of Swaram",
  //   "Blurred Strokes",
  //   "Box of strokes",
  //   "Contrasting combo ",
  //   "Colour of Face",
  //   "Dark Shades",
  //   "Dancing in the shadess ",
  //   "Eyes in Pastel",
  //   "Fly as butterfly",
  //   "Fly High",
  //   "Floral sphere",
  //   "Floor of pearls",
  //   "Humanity is Equal",
  //   "Imaginary Forest",
  //   "Lost in Wandering",
  //   "Landscape beauty of town",
  //   "Mistery strokes",
  //   "Mountain High",
  //   "Purple place of lake",
  //   "Play with piano",
  //   "Pastel words",
  //   "Roots of Mistery",
  //   "Sky and I",
  //   "See the SeaShore ",
  //   "Sunset screams",    
  //   "Swing in wind", 
  //   "Shades of rythms",
  //   "Storys in story", 
  //   "Vision of strokes",
  //   "Water Strokes"
  //   ];
  options:any;
    myControl = new FormControl();
    filteredOptions: Observable<string[]>=new Observable<string[]>();
    ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
  if (!value) {
    return this.options;
  }
  const filterValue = value.toLowerCase();
  return this.options.filter((option:any) => option.toLowerCase().includes(filterValue));
    
   }
}
