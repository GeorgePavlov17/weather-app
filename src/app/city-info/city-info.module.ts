import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityInfoPageRoutingModule } from './city-info-routing.module';

import { CityInfoPage } from './city-info.page';
import { HomePageModule } from "../home/home.module";

@NgModule({
    declarations: [CityInfoPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CityInfoPageRoutingModule,
        HomePageModule,
    ]
})
export class CityInfoPageModule {}
