import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from './home/home.component';
import { SearchSlotsComponent } from './search-slots/search-slots.component';
import { PinComponent } from './pin/pin.component';
import { ByDistrictComponent } from './by-district/by-district.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {NgxPaginationModule} from 'ngx-pagination';
import { ByLocationComponent } from './by-location/by-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchSlotsComponent,
    PinComponent,
    ByDistrictComponent,
    ByLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
