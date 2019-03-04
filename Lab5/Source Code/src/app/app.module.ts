import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const firebaseConfiguration = {
  apiKey: "AIzaSyBVyd1DllOvk0wnDRKDAv_KkXC1hUMk7mw",
  authDomain: "lab5-7e84b.firebaseapp.com",
  databaseURL: "https://lab5-7e84b.firebaseio.com",
  projectId: "lab5-7e84b",
  storageBucket: "lab5-7e84b.appspot.com/",
  messagingSenderId: "779559653727"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports:
      [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(firebaseConfiguration),
  AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFireAuth,
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
