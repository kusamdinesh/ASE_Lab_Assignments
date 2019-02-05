import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturecomponentComponent } from './temperaturecomponent.component';

describe('TemperaturecomponentComponent', () => {
  let component: TemperaturecomponentComponent;
  let fixture: ComponentFixture<TemperaturecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
