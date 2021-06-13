import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllStates():Observable<any>{
    return this.http.get("https://cdn-api.co-vin.in/api/v2/admin/location/states");
  }

  getAllDistrict(id:any):Observable<any>{
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`);
  }

  getSessionsByDistrict(id:any,date:any):Observable<any>{
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=371&date=20-06-2021`)
  }

  getSessionsByPin(date:any,pin:any):Observable<any>{
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=416002&date=14-06-2021`)
  }

  getCentersByLocation(lat:any,long:any):Observable<any>{
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${long}`)
  }
}
