import { Component, OnInit } from '@angular/core';
import { CityReport } from '../city-report'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: CityReport;
  cityid: string = '4887398';
  constructor(private _fetchWeatherService: WeatherService) { }

  ngOnInit() {
    let report = this._fetchWeatherService.getCity(this.cityid)
    .then( city=>{
      console.log(city);
      this.city = new CityReport(
        'Chicago, IL',
        city.main.humidity,
        city.main.temp_max,
        city.main.temp_min,
        city.weather[0].description,
        'https://static.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg',
        this.cityid
      )
      console.log(this.city);
    })
    .catch(err=>{
      console.log(err);
      this.city = new CityReport(
        'Chicago, IL - ' + err,
        -1,
        -1,
        -1,
        '',
        'https://static.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg',
        this.cityid
      )
    })
  }

}

