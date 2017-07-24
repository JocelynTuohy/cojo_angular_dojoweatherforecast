import { Component, OnInit } from '@angular/core';
import { CityReport } from '../city-report'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  city: CityReport;
  cityid: string = '4140963';
  constructor(private _fetchWeatherService: WeatherService) { }

  ngOnInit() {
    let report = this._fetchWeatherService.getCity(this.cityid)
    .then( city=>{
      console.log(city);
      this.city = new CityReport(
        'Washington, D.C.',
        city.main.humidity,
        city.main.temp_max,
        city.main.temp_min,
        city.weather[0].description,
        'https://static.pexels.com/photos/504847/pexels-photo-504847.jpeg',
        this.cityid
      )
      console.log(this.city);
    })
    .catch(err=>{
      console.log(err);
      this.city = new CityReport(
        'Washington, D.C. - ' + err,
        -1,
        -1,
        -1,
        '',
        'https://static.pexels.com/photos/504847/pexels-photo-504847.jpeg',
        this.cityid
      )
    })
  }

}
