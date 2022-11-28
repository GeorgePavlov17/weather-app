import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { City } from '../types/City';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() public city!: City;

  constructor(
    private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  weatherTypeIcon(icon: string) {
    return `${this.weatherService.WEATHER_TYPE_ICON_URL}${icon}.png`;
  }  
}
