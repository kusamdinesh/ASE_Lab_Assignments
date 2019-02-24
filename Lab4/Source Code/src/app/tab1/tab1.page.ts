import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Router} from '@angular/router';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(public alert: AlertController, private router: Router, public navcon: NavController) {
}
ngOnInit(): void {
}

  async register() {
    const alert = await this.alert.create({
      header : 'Registered',
      buttons: ['ok']
    });
    await alert.present();
    this.navcon.navigateForward(['/tab3']);
  }
}
