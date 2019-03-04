import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {UserData} from '../datafile/userdata';
import {AngularFireAuth} from 'angularfire2/auth';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  appdata = { title: '', description: '', date: '', time: '' };

  public dbase: AngularFirestore;
  public items: Observable<any[]>;
  public udata: UserData;
  public email: string;
  public path = 'items-';

  constructor( public notifs: LocalNotifications, private firest: AngularFirestore, private afu: AngularFireAuth) {

    this.email = 'kusamdinesh@gmail.com';
    this.path += this.email;

    this.items = firest.collection(this.path).valueChanges();
    this.dbase = firest;
    console.log(this.items);
  }

  ngOnInit() {

  }

  submit() {

    console.log(this.appdata);
    const date = new Date(this.appdata.date + ' ' + this.appdata.time);
    console.log(date);

    this.notifs.schedule({
      id: 1,
      text: this.appdata.description,
      trigger: {at: date},
      led: 'FF0000',
      sound: null,
      title: this.appdata.title
    });

    this.udata = this.appdata;
    console.log(this.udata);

    let collection = this.dbase.collection(this.path);
    collection.add(this.udata);

    this.appdata = { title: '', description: '', date: '', time: '' };

  }

}
