import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { City } from '../types/City';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  @ViewChild('searchBox') searchBox!: ElementRef;

  public cities: City[] = [];
  public citiesToShow: City[] = [];
  public searchShown: boolean = false;

  constructor(
    private weatherService: WeatherService, 
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.weatherService.getCityData('Sofia').then((result) => {
      const city: City = {
        name: result.name,
        weatherType: result.weather[0].main,
        weatherIcon: result.weather[0].icon,
        temperature: result.main.temp,
        image: 'https://www.transfertaxi.net/wp-content/uploads/2019/05/sofia-airport-to-city-center.jpg'
      }
      this.cities.push(city);
    }, (error) => {
      this.presentToast();
    });

    this.weatherService.getCityData('London').then((result) => {
     
      const city: City = {
        name: result.name,
        weatherType: result.weather[0].main,
        weatherIcon: result.weather[0].icon,
        temperature: result.main.temp,
        image: 'https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0'
      }
      this.cities.push(city);
    }, (error) => {

    });

    this.weatherService.getCityData('Paris').then((result) => {
      const city: City = {
        name: result.name,
        weatherType: result.weather[0].main,
        weatherIcon: result.weather[0].icon,
        temperature: result.main.temp,
        image: 'https://viatravelers.com/wp-content/uploads/2020/12/parisatnight.jpeg'
      }
      this.cities.push(city);
    }, (error) => {

    });
    this.citiesToShow = this.cities;
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

  searchTowns() {
    this.presentToast();
    return;
    const name = this.searchBox.nativeElement.value;

    if (name !== '' && name.length >= 3) {
      this.citiesToShow = [];

      this.weatherService.getCityData(name).then((result) => {
        const city: City = {
          name: result.name,
          weatherType: result.weather[0].main,
          weatherIcon: result.weather[0].icon,
          temperature: result.main.temp,
          image: 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
        }
        this.citiesToShow.push(city);
      }, (error) => {
        this.presentToast();
      });
      
    } else {
      this.citiesToShow = this.cities;
    }
  }

  async presentToast() {
    let toast = await this.toastController.create({
      message: 'Location not found!',
      duration: 2000,
      position: 'top',
      cssClass: 'toastClass'
    });

    await toast.present();
  }
}