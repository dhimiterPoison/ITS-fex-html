import { TestBed } from '@angular/core/testing';

import { SwapiApiService } from './swapi-api.service';

describe('SwapiApiService', () => {
  let service: SwapiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwapiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
