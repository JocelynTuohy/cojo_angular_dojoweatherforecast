import { Component, OnInit } from '@angular/core';
import { CityReport } from '../city-report'
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city: CityReport;
  cityid: string = '5809844';
  constructor(private _fetchWeatherService: WeatherService) { 
    
  }

  ngOnInit() {
    let report = this._fetchWeatherService.getCity(this.cityid)
    .then( city=>{
      console.log(city);
      this.city = new CityReport(
        'Seattle, WA',
        city.main.humidity,
        city.main.temp_max,
        city.main.temp_min,
        city.weather[0].description,
        'https://images.pexels.com/photos/516023/pexels-photo-516023.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
        this.cityid
      )
      console.log(this.city);
    })
    .catch(err=>{
      console.log(err);
      this.city = new CityReport(
        'Seattle, WA - ' + err,
        -1,
        -1,
        -1,
        '',
        'https://images.pexels.com/photos/516023/pexels-photo-516023.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
        this.cityid
      )
    })
  }

}
