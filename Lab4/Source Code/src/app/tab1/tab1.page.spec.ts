import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertController, IonicModule} from '@ionic/angular';
import {AlertControllerMock, AlertMock} from 'ionic-mocks';
import {Alert} from 'selenium-webdriver';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

import { Tab1Page } from './tab1.page';



class MockService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}
describe('Tab1Page', () => {

  let component: Tab1Page;
  let service: MockService;

  beforeEach(() => {
    service = new MockService();
    component = new Tab1Page(service);
  });
  afterEach(() => {
    service = null;
    component = null;
  });

  it('needsLogin returns false when the user is not authenticated',()=>{
    service.authenticated = false;
    expect(component.Signup()).toBeTruthy();
  });

  it('needsLogin returns false when the user is not authenticated',()=>{
    service.authenticated = true;
    expect(component.Signup()).toBeTruthy();
  });

});

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let alertCtrl: AlertController;
  let alert =  Alert;
  let router: Router;
  let navcon: NavController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab1Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        IonicModule.forRoot()
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
    alert = AlertMock.instance();
    alertCtrl = AlertControllerMock.instance();
  });
    it('should be created', () => {
      expect(component instanceof Tab1Page).toBe(true);
    });

    it('sign up function', () => {

      let fun = new Tab1Page(alertCtrl, router, navcon);
      fun.Signup();
      expect(alertCtrl.create).toHaveBeenCalled();
  });
});
