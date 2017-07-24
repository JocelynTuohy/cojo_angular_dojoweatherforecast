export class CityReport {
  name: string;
  humidity: number;
  average: number;
  high: number;
  low: number;
  status: string;
  imageurl: string;
  cityid: string;
  constructor(name, humidity, high, low, status, imageurl, cityid ){
    this.name = name;
    this.humidity = humidity;
    this.average = (high+low)/2;
    this.high = high;
    this.low = low;
    this.status = status;
    this.imageurl = imageurl;
    this.cityid = cityid;
    console.log(this.name + ' success!');
  }
}
