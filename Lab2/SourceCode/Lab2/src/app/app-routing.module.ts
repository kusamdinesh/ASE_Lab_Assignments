import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemperaturecomponentComponent} from './temperaturecomponent/temperaturecomponent.component';
import { HourlycomponentComponent} from './hourlycomponent/hourlycomponent.component';

const routes: Routes = [
  {
    path: '',
    component: TemperaturecomponentComponent
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
