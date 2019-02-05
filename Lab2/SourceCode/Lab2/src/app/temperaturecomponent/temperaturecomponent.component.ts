import { Component, OnInit } from '@angular/core';
import { ServiceweatherService } from '../serviceweather.service';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-temperaturecomponent',
  templateUrl: './temperaturecomponent.component.html',
  styleUrls: ['./temperaturecomponent.component.css']
})
export class TemperaturecomponentComponent implements OnInit {

  temperatureresult: object;
  hourlyresult: object;
  state: " ";
  city: " ";
  constructor(private  data: ServiceweatherService) {
  }

  ngOnInit() {
  }

    click1 = () => {
      this.data.getUsers(this.state, this.city).subscribe(data => this.temperatureresult = data);
      this.data.getUser(this.state, this.city).subscribe(data => this.hourlyresult = data);

    }
  }


