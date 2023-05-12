import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FormComponent } from './form/form.component';
import { QueryComponent } from './query/query.component';
import { AddanswerComponent } from './query/addanswer/addanswer.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
  {
    path:"",component:AdminComponent,
    children:[
      {path:"",component:AddproductComponent},
      {path:"form",component:AddproductComponent},
      {path:"form1",component:QueryComponent},
      {path:"forum/:id",component:AddanswerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
