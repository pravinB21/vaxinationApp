import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-by-district',
  templateUrl: './by-district.component.html',
  styleUrls: ['./by-district.component.scss']
})
export class ByDistrictComponent implements OnInit {

  constructor(private service: UserService) { }
  states: any;
  districts: any;
  date: any;
  districtId:any;
  allSessions:any;
  totalLength:any;
  page:number=1;
  ngOnInit(): void {
    this.service.getAllStates().subscribe(data => {
      this.states = data.states;
      console.log(this.states)
    })
  }

  selectedState(event: any) {
    console.log(event.target.value)
    this.service.getAllDistrict(event.target.value).subscribe(data => {
      this.districts = data.districts;
      console.log(this.districts)
    })
  }

  selectedDistricts(event: any) {
    console.log(event.target.value);
    this.districtId=event.target.value
  }

  onClick(inp: any) {
    console.log(inp);
    this.date = inp.split('-').reverse().join("-");
    this.service.getSessionsByDistrict(this.districtId,this.date).subscribe(data=>{
      console.log(data);
      this.allSessions=data.sessions;
      this.totalLength=data.sessions.length;
    })
  }
}
