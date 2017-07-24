import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getCity(id: string){
    // API CALL - a5db3261ef80951de74d5fcf8d17ca7e
    let ourweather = this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=a5db3261ef80951de74d5fcf8d17ca7e`).map(data=>data.json()).toPromise()
    console.log(ourweather);
    return ourweather;
  }
  
}