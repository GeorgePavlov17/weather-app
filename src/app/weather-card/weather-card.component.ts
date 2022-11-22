import { Component, OnInit, Input } from '@angular/core';
import { City } from '../types/City';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {

  @Input() public city!: City;

  constructor() { }

  ngOnInit() {
    
  }

}
