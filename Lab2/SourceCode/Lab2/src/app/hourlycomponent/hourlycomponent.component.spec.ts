import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlycomponentComponent } from './hourlycomponent.component';

describe('HourlycomponentComponent', () => {
  let component: HourlycomponentComponent;
  let fixture: ComponentFixture<HourlycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
