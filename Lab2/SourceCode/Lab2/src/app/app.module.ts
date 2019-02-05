import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import  {ServiceweatherService} from './serviceweather.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemperaturecomponentComponent } from './temperaturecomponent/temperaturecomponent.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HourlycomponentComponent } from './hourlycomponent/hourlycomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturecomponentComponent,
    HourlycomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceweatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
