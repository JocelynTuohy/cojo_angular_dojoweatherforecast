import { Component, OnInit } from '@angular/core';
import { CityReport } from '../city-report'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  city: CityReport;
  cityid: string = '5392171';
  constructor(private _fetchWeatherService: WeatherService) { }

  ngOnInit() {
    let report = this._fetchWeatherService.getCity(this.cityid)
    .then( city=>{
      console.log(city);
      this.city = new CityReport(
        'San Jose, CA',
        city.main.humidity,
        city.main.temp_max,
        city.main.temp_min,
        city.weather[0].description,
        'https://static.pexels.com/photos/196667/pexels-photo-196667.jpeg',
        this.cityid
      )
      console.log(this.city);
    })
    .catch(err=>{
      console.log(err);
      this.city = new CityReport(
        'San Jose, WA - ' + err,
        -1,
        -1,
        -1,
        '',
        'https://static.pexels.com/photos/196667/pexels-photo-196667.jpeg',
        this.cityid
      )
    })
  }

}

