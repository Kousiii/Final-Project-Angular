import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormComponent } from './form/form.component';
import { QueryComponent } from './query/query.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AnswerComponent } from './query/answer/answer.component';

@NgModule({
  declarations: [
    FormComponent,
    QueryComponent,
    AnswerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { 
}
