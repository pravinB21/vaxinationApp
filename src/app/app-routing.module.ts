import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByDistrictComponent } from './by-district/by-district.component';
import { ByLocationComponent } from './by-location/by-location.component';
import { HomeComponent } from './home/home.component';
import { PinComponent } from './pin/pin.component';
import { SearchSlotsComponent } from './search-slots/search-slots.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"search",component:SearchSlotsComponent,
  children:[
    {path:"bypin",component:PinComponent},
    {path:"byDistrict",component:ByDistrictComponent},
    {path:"byLocation",component:ByLocationComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
