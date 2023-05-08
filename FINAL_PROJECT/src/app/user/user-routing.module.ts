import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardDetailsComponent } from './collection-page/card-details/card-details.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ForumanswerComponent } from './reachus/forumanswer/forumanswer.component';
import { LoginComponent } from '../login/login.component';
import { MapComponent } from './reachus/map/map.component';



const routes: Routes = [
{path:"",component: UsermenuComponent,
 
  children:[
    {path:"",component:HomePageComponent},
    {path:"home",component: HomePageComponent},
    {path:"collection",component:CollectionPageComponent},
    {path:'artworks/:id',component:CardDetailsComponent},
    {path:"reachus",component:ReachusComponent},
    {path:'forumpage/:id',component:ForumanswerComponent},
    {path:"",component:LoginComponent},
    {path:'reachus/:id',component:MapComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
