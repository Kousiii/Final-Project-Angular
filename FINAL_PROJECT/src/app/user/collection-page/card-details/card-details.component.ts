import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  id:any;
  details:any;
  reviews:any;
 constructor(private hs:CollectionService,private ar:ActivatedRoute){
 
    this.ar.params.subscribe(
      {
        next: (params)=>{ 
         this.id =params['id']
         this.readData()
        },
        error: () => this.id = 0
      }
    )
 }

 readData(){

    this.hs.getCollectionsById(this.id).subscribe({
        next: (data:any)=> this.details =data,
        error: ()=> this.details = {}
    })

    this.hs.getReviews().subscribe({
      next:(data:any)=>this.reviews=data,
      error:()=>this.reviews=[]
    })
    
 }
//  isLiked = false;
//  likeCount = Number(localStorage.getItem('likeCount')) || 0;
//  readonly MAX_LIKES = 100;
//  newLikes = 1;

//  toggleLike() {
//   if (this.isLiked && this.likeCount > 0) {
//     this.likeCount--;
//   } else if (!this.isLiked && this.likeCount < this.MAX_LIKES) {
//     this.likeCount++;
//   }
//   this.isLiked = !this.isLiked;
//   localStorage.setItem('likeCount', this.likeCount.toString());
// }

//  addLikes() {
//    const likesToAdd = Math.min(this.newLikes, this.MAX_LIKES - this.likeCount);
//    this.likeCount += likesToAdd;
//    this.newLikes = 1;
//    localStorage.setItem('likeCount', this.likeCount.toString());
//  }

  likeCount = 0;
  unlikeCount = 0;

  ngOnInit() {
    const storedLikeCount = Number(localStorage.getItem('likeCount'));
    if (!isNaN(storedLikeCount)) {
      this.likeCount = storedLikeCount;
    }

    const storedUnlikeCount = Number(localStorage.getItem('unlikeCount'));
    if (!isNaN(storedUnlikeCount)) {
      this.unlikeCount = storedUnlikeCount;
    }
  }

  like() {
    this.likeCount++;
    localStorage.setItem('likeCount', this.likeCount.toString());
  }

  unlike() {
    this.unlikeCount++;
    localStorage.setItem('unlikeCount', this.unlikeCount.toString());
  }
}


