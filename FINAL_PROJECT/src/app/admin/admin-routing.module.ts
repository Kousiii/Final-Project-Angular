import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FormComponent } from './form/form.component';
import { QueryComponent } from './query/query.component';

const routes: Routes = [
  {
    path:"",component:AdminComponent,
    children:[
      {path:"",component:FormComponent},
      {path:"form",component:FormComponent},
      {path:"form1",component:QueryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
