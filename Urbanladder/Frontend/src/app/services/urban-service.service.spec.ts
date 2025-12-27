import { TestBed } from '@angular/core/testing';

import { UrbanServiceService } from './urban-service.service';

describe('UrbanServiceService', () => {
  let service: UrbanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrbanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
