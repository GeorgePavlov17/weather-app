import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { City } from '../types/City';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.page.html',
  styleUrls: ['./city-info.page.scss'],
})
export class CityInfoPage implements OnInit {
  @Input() public city!: City;

  public currentCity!: { 
    name: string | undefined,
    country: string | undefined,
    weatherType: string,
    weatherIcon: string,
    temp: number,
    feelsLike: number,
    minTemp: number,
    maxTemp: number,
    wind: string,
    image: string
   } | undefined;

   public loaded: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private weatherService: WeatherService
    ) { }

  ngOnInit() {
    const cityName = this.activatedRoute.snapshot.params['cityName'];
    
    return this.weatherService.getCityData(cityName).then((result) => {
      this.currentCity = {
        name: result.name,
        country: result.sys.country,
        weatherType: result.weather[0].main,
        weatherIcon: result.weather[0].icon,
        temp: result.main.temp,
        feelsLike: result.main.feels_like,
        minTemp: result.main.temp_min,
        maxTemp: result.main.temp_max,
        wind: result.wind.speed,
        image: 'https://wallpapercave.com/wp/WSjKlp7.jpg'
      }
      this.loaded = true;
    });
  }

  weatherTypeIcon(icon: string | undefined) {
    if(icon === undefined) {
      return '';
    }
    return `${this.weatherService.WEATHER_TYPE_ICON_URL}${icon}.png`;
  }  
}
