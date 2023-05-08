import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-addanswer',
  templateUrl: './addanswer.component.html',
  styleUrls: ['./addanswer.component.css']
})
export class AddanswerComponent  {
  forum: any;
  id: any;
  answer:any;
  constructor(
    private fb: FormBuilder,
    private fs: ForumService,
    private ar: ActivatedRoute
  ) {

    this.ar.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.readData();
      },
      error: () => this.id = 0
    });
  }

  readData() {
    this.fs.getForumById(this.id).subscribe({
      next: (data: any) => this.forum = data,
      error: () => this.forum = {}
    });
  }

  addResponse(answer:string){
    if (this.forum && this.forum.answers){
      this.forum.answers.push(answer);
      this.fs.putResponse(this.forum).subscribe({
        next: (data:any) => {
          alert("your response stored");
          location.reload();
        },
        error: (error) => alert('Error in saving response')
      });
    }
  }
}
