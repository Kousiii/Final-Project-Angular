import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuggestionService } from 'src/app/services/suggestion.service';

@Component({
  selector: 'app-sform',
  templateUrl: './sform.component.html',
  styleUrls: ['./sform.component.css']
})
export class SformComponent {
  suggestionForm:any;
 
         constructor(private fb:FormBuilder,private fs:SuggestionService){
         this.suggestionForm = this.fb.group({
            name:['',[Validators.required,Validators.minLength(3)]],
            message:['',[Validators.required,Validators.minLength(10)]],
            email:['',[Validators.required, Validators.pattern(
              "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]]     
          });
         }
  
         savesuggestion(){
            var temp:any={
            id: Math.round(Math.random()*1000),
            name: this.suggestionForm.value.name,
            email: this.suggestionForm.value.email,
            message:this.suggestionForm.value.message
          
          }
          
          this.fs.postEnquiry(temp).subscribe(
           { 
            next: data=>{
              alert('Your Feedback is saved')
              location.reload();
            },
            error:(error)=>alert('Not saved ---some Error')
          }
      
          )
      
        }
}
