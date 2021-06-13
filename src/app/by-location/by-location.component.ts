import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-by-location',
  templateUrl: './by-location.component.html',
  styleUrls: ['./by-location.component.scss']
})
export class ByLocationComponent implements OnInit {

  constructor(private service:UserService) { }
  lat:any;
long:any;
allCenters:any;
totalLength:any;
page:number=1;
  ngOnInit(): void {
  }

  onClick(){
    if('geolocation' in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat=success.coords.latitude;
        this.long=success.coords.longitude;
        this.service.getCentersByLocation(this.lat,this.long).subscribe(data=>{
          console.log(data)
        this.allCenters=data.centers;
        this.totalLength=data.centers.length
        })
      })
    }
  }
}
