import { Component, OnInit } from '@angular/core';
import { City } from '../types/City';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public cities: City[] = [];

  constructor() {}

  ngOnInit() {
    this.cities.push(
      <City>{name: 'London', weatherType: 'Cloudy', temperature: 3, image: 'https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0'},
      <City>{name: 'Sofia', weatherType: 'Sunny', temperature: 6, image: 'https://www.transfertaxi.net/wp-content/uploads/2019/05/sofia-airport-to-city-center.jpg'}
    );
  }
}
