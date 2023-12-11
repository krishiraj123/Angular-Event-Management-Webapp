import { TestBed } from '@angular/core/testing';

import { ApiEventService } from './api-event.service';

describe('ApiEventService', () => {
  let service: ApiEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
