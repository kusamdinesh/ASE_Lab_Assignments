import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { Tab1Page} from '../tab1/tab1.page';
import { Tab2Page} from '../tab2/tab2.page';
import { Router} from '@angular/router';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  username: String;
  password: String;
  constructor( public alert: AlertController, private router: Router ) {

  }
  async signIn() {
    if (this.username === 'admin' && this.password === 'admin') {
      const alert = await this.alert.create({
        header : 'Login Successful',
        subHeader: 'Welcome' + ' ' + this.username,
        buttons: ['ok']
      });
     await alert.present();
      this.router.navigate(['/tab2']);
    } else {
      const alert = await this.alert.create({
        header : 'Login Failed',
        buttons: ['ok']
      });
     await alert.present();
    }
  }
  ngOnInit() {
  }
  register1() {
    this.router.navigateByUrl('/tab1');
  }
}
