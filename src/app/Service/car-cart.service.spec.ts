import { TestBed } from '@angular/core/testing';

import { CarCartService } from './car-cart.service';

describe('CarCartService', () => {
  let service: CarCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
