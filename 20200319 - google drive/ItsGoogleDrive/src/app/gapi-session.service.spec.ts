import { TestBed } from '@angular/core/testing';

import { GapiSessionService } from './gapi-session.service';

describe('GapiSessionService', () => {
  let service: GapiSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GapiSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
