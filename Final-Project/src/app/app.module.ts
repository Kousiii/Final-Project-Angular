import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserpagesComponent } from './user/userpages/userpages.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './user/home-page/home-page.component';
import { CardsComponent } from './user/userpages/cards/cards.component';
import { PricePipe } from './pipes/price.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CardDetailsComponent } from './user/userpages/card-details/card-details.component';
import { SuggestionComponent } from './user/home-page/suggestion/suggestion.component';
import { ReviewformComponent } from './user/userpages/card-details/reviewform/reviewform.component';
import { ArtistFilterPipe } from './pipes/artist-filter.pipe';
import { ArtTypePipe } from './pipes/art-type.pipe';
import { UsermenuComponent } from './user/usermenu/usermenu.component';


@NgModule({
  declarations: [
    AppComponent,
    UserpagesComponent,
    HomePageComponent,
    CardsComponent,
    PricePipe,
    FilterPipe,
    CardDetailsComponent,
    SuggestionComponent,
    ReviewformComponent,
    ArtistFilterPipe,
    ArtTypePipe,
    UsermenuComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
