import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceweatherService {

  constructor(private http: HttpClient) { }

  getUsers(st, ct) {
    return this.http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/' + st + '/' + ct + '.json');
  }

  getUser(st, ct) {
    return this.http.get('http://api.wunderground.com/api/36b799dc821d5836/forecast/q/' + st + ' + ' + ct + '.json');
  }
}
