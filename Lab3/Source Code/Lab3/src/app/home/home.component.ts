import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ItemDetailsComponent} from '../item-details/item-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Details: any;
  findRecipe: FormGroup;

  constructor( private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.findRecipe = this.fb.group({
      recipeName: ['', [Validators.required]]
    });

    this.getDetails();
  }

  getDetails(): void {
    if( this.findRecipe.controls.recipeName.value === '' ) {
      return;    }
    this.http.get('https://api.nutritionix.com/v1_1/search/'+ this.findRecipe.controls.recipeName.value + '?results=0:1&fields=*&appId='+ 'a4addacc&appKey=dc21c46aca24b232524cdf60d34bf4a2').subscribe(data => {
      this.Details = data;
    });

    responsiveVoice.speak(this.findRecipe.controls.recipeName.value );

  }
}
