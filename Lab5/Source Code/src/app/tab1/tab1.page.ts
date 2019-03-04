import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import { Injectable} from '@angular/core';

@Injectable()
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  emailId: string;
  password: string;

  constructor(public navControl: NavController, private fireauth: AngularFireAuth, private router: Router) {
  }

  register(){
    try {
      this.fireauth.auth.createUserWithEmailAndPassword(this.emailId, this.password).then(function () {
        alert("Succesfully Registered")
      }).catch(() =>
      {
        alert("Email or Password is Invalid");
      })
      this.navControl.navigateForward(['/tab1']);
    }
    catch(e){
      console.error(e);
    }
  }

  signin(){
    try {
      this.fireauth.auth.signInWithEmailAndPassword(this.emailId, this.password).then(() => {
        this.navControl.navigateForward(['/tab2']);
      }).catch(()=>{
        alert("Try again. Invalid Credentials");
      })
    } catch(e){
      console.error(e);
    }
  }
  public getUserEmail(): string {
    return this.emailId;
  }
}
