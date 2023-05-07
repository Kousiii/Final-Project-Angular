import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SuggestionComponent } from './home-page/suggestion/suggestion.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CollectionPageComponent } from './collection-page/collection-page.component';
import { CardsComponent } from './collection-page/cards/cards.component';
import { AppRoutingModule } from '../app-routing.module';
import { FilterPipe } from '../pipes/filter.pipe';
import { ArtTypePipe } from '../pipes/art-type.pipe';
import { ArtistFilterPipe } from '../pipes/artist-filter.pipe';
import { PricePipe } from '../pipes/price.pipe';
import { CardDetailsComponent } from './collection-page/card-details/card-details.component';
import { ReviewformComponent } from './collection-page/card-details/reviewform/reviewform.component';
import { ReachusComponent } from './reachus/reachus.component';
import { ReachboxComponent } from './reachus/reachbox/reachbox.component';
import { ForumComponent } from './reachus/forum/forum.component';
import { ForumanswerComponent } from './reachus/forumanswer/forumanswer.component';




@NgModule({
  declarations: [
    HomePageComponent,
    SuggestionComponent,
    UsermenuComponent,
    CollectionPageComponent,
    CardsComponent,
    FilterPipe,
    ArtTypePipe,
    ArtistFilterPipe,
    PricePipe,
    CardDetailsComponent,
    ReviewformComponent,
    ReachusComponent,
    ReachboxComponent,
    ForumComponent,
    ForumanswerComponent
    

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  
 
  ]
})
export class UserModule { }
