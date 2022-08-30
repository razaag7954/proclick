import { TestBed } from '@angular/core/testing';

import { OshatypesService } from './oshatypes.service';

describe('OshatypesService', () => {
  let service: OshatypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OshatypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
