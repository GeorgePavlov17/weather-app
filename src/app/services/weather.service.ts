import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  WEATHER_API_URL = environment.apiUrl;
  WEATHER_API_KEY = environment.apiKey;
  WEATHER_TYPE_ICON_URL = environment.apiTypeIconUrl; 

  constructor(private http: HttpClient) { }

  getCityData(cityName: string): Promise<any> {
    const query = `${this.WEATHER_API_URL}data/2.5/weather?q=${cityName}&appid=${this.WEATHER_API_KEY}&units=metric`;

    return new Promise((resolve, reject) => {
      this.http.get(query).subscribe((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      });
    });
  }
}
