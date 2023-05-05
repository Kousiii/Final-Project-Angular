import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardDetailsComponent } from './collection-page/card-details/card-details.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ForumComponent } from './reachus/forum/forum.component';


const routes: Routes = [
{path:"",component: UsermenuComponent,
 
  children:[
    {path:"",component:HomePageComponent},
    {path:"home",component: HomePageComponent},
    {path:"collection",component:CollectionPageComponent},
    {path:'artworks/:id',component:CardDetailsComponent},
    {path:"reachus",component:ReachusComponent},
    // {path:"forumpage",component:ForumComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
