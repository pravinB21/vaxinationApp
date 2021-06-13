import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  constructor(private service:UserService) { }
  dt:any
  ngOnInit(): void {
  }

  allSessions:any
  onClick(date:any,pin:any){
    this.dt = date.split('-').reverse().join("-");
    this.service.getSessionsByPin(this.dt,pin).subscribe(data=>{
      console.log(data);
      this.allSessions=data.sessions
    })

  }
}
