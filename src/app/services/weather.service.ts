import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  WEATHER_API_URL = environment.apiUrl;
  WEATHER_API_KEY = environment.apiKey;

  constructor(private http: HttpClient) { }

  getCityData(cityName: string): Promise<any> {
    const query = `${this.WEATHER_API_URL}data/2.5/weather?q=${cityName}&apiid=${this.WEATHER_API_KEY}`;

    return new Promise((resolve, reject) => {
      this.http.get(query).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }

  // getWeatherData(): Observable<any> {
  //   let lat = -37.840935;
  //   let lon = 144.946457;
    
  //   let queryString = ``;

  //   return this.http.get(queryString);
  // }
}
