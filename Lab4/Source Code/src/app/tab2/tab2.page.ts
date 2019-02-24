import { Component , OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  result: any = [];
  sas: string[] = [];
  sa: string;
  data: Observable<any>;

  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
   ngOnInit(): void {
   }

  add() {
    this.sas.push(this.sa);
    this.sa = '';
  }

  getData() {
    var url = 'https://jsonplaceholder.typicode.com/posts/1';
    this.data = this.http.get(url);
    console.log('clicked');
    this.data.subscribe(data => {
      this.result = data;
    });
  }

  delete(item) {
    const index = this.sas.indexOf(item);
    if (index > -1) {
      this.sas.splice(index, 1);
    }
  }
}
