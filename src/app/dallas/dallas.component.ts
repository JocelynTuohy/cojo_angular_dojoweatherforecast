import { Component, OnInit } from '@angular/core';
import { CityReport } from '../city-report'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city: CityReport;
  cityid: string = '4684888';
  constructor(private _fetchWeatherService: WeatherService) { }

  ngOnInit() {
    let report = this._fetchWeatherService.getCity(this.cityid)
    .then( city=>{
      console.log(city);
      this.city = new CityReport(
        'Dallas, TX',
        city.main.humidity,
        city.main.temp_max,
        city.main.temp_min,
        city.weather[0].description,
        'https://static.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg',
        this.cityid
      )
      console.log(this.city);
    })
    .catch(err=>{
      console.log(err);
      this.city = new CityReport(
        'Dallas, TX - ' + err,
        -1,
        -1,
        -1,
        '',
        'https://static.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg',
        this.cityid
      )
    })
  }

}
