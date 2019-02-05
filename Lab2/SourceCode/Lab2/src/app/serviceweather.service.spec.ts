import { TestBed } from '@angular/core/testing';

import { ServiceweatherService } from './serviceweather.service';

describe('ServiceweatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceweatherService = TestBed.get(ServiceweatherService);
    expect(service).toBeTruthy();
  });
});
