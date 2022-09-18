import { TestBed } from '@angular/core/testing';

import { EuroDrawService } from './euro-draw.service';

describe('EuroDrawService', () => {
  let service: EuroDrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuroDrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
