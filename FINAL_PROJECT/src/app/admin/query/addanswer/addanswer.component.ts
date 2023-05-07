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
 forum:any;
 id:any;
  answerForm:any;

         constructor(private fb:FormBuilder,private fs:ForumService,private ar:ActivatedRoute){
         this.answerForm = this.fb.group({
            answer:['',[Validators.required,Validators.minLength(3)]]
          });
         
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
          this.fs.getForumById(this.id).subscribe({
          next: (data:any)=> this.forum=data,
          error: ()=> this.forum= {}
          }) 
         }
        
         saveAns(){

          var temp:any={
            answer:this.answerForm.value.answer
          }
        
          this.fs.postResponse(temp).subscribe(
           { 
            next: data=>{
              alert('Your Response is posted')
              this.fs.postResponse(data);
              location.reload();
            },
            error:(error)=>alert('Not posted ---some Error')
          }
      
          )
      
        
      }

















  //  messageForm!: FormGroup;

  // constructor(private fb: FormBuilder, private forumService: ForumService) { }

  // ngOnInit(): void {
  //   this.messageForm = this.fb.group({
  //     message: ['', [Validators.required, Validators.minLength(10)]]
  //   });
  // }

  // onSubmit(): void {
  //   const message = this.messageForm.get('message').value;

  //   const data = { message };

  //   this.forumService.postResponse(data).subscribe(
  //     response => {
  //       console.log(response);
  //       alert('Message sent successfully!');
  //       this.messageForm.reset();
  //     },
  //     error => {
  //       console.log(error);
  //       alert('Failed to send message. Please try again later.');
  //     }
  //   );
  // }
}
