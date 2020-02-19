import { TestBed } from '@angular/core/testing';

import { ToDoListProxyService } from './to-do-list-proxy.service';

describe('ToDoListProxyService', () => {
  let service: ToDoListProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
