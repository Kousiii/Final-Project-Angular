import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpagesComponent } from './user/userpages/userpages.component';
import { HomePageComponent } from './user/home-page/home-page.component';
import { CardDetailsComponent } from './user/userpages/card-details/card-details.component';

const routes: Routes = [
  {path:"", component: HomePageComponent},
  {path:"userpage", component: UserpagesComponent},
  {path:"artworks/:id", component: CardDetailsComponent},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
