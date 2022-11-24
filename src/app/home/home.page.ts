import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { City } from '../types/City';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  public cities: City[] = [];
  public citiesToShow: City[] = [];
  public searchShown: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.cities.push(
      <City>{name: 'London', weatherType: 'Cloudy', temperature: 3, image: 'https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0'},
      <City>{name: 'Sofia', weatherType: 'Sunny', temperature: 6, image: 'https://www.transfertaxi.net/wp-content/uploads/2019/05/sofia-airport-to-city-center.jpg'},
      <City>{name: 'Paris', weatherType: 'Sunny', temperature: 7, image: 'https://viatravelers.com/wp-content/uploads/2020/12/parisatnight.jpeg'}
    );
    this.citiesToShow = this.cities;
    this.weatherService.getCityData('Sofia').then((result) => {
      console.log(result);
    });
  }

  ngOnDestroy() {
    this.cities = [];
  }

  toggleSearch() {
    this.searchShown = !this.searchShown;
  }

  hideResults() {
    this.searchShown = false;
  }

  searchTowns(event: any) {
    if(event.target.value !== '') {
      const filter = event.target.value.toLowerCase();

      this.citiesToShow = this.cities.filter(c => {
        return c.name.toLowerCase().indexOf(filter) > -1;
      })
    } else {
      this.citiesToShow = this.cities;
    }
  }
}