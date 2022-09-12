import { TestBed } from '@angular/core/testing';

import { ProfiletypeservicesService } from './profiletypeservices.service';

describe('ProfiletypeservicesService', () => {
  let service: ProfiletypeservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfiletypeservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
