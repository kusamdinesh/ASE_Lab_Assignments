import { Component, OnInit , Input } from '@angular/core';
import { ServiceweatherService} from '../serviceweather.service';
import { observable} from 'rxjs';
import { TemperaturecomponentComponent} from '../temperaturecomponent/temperaturecomponent.component';

@Component({
  selector: 'app-hourlycomponent',
  templateUrl: './hourlycomponent.component.html',
  styleUrls: ['./hourlycomponent.component.css']
})
export class HourlycomponentComponent implements OnInit {

  public hourlyresult : object;
  city:"";
  hourly: object;
  state:"";
  constructor(private data: ServiceweatherService) { }

  ngOnInit() {
  }
  click1 = () => {
    this.data.getUser(this.state, this.city).subscribe(data => this.hourly = data);
    console.log(this.hourly);
  }

}
