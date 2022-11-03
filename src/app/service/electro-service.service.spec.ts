import { TestBed } from '@angular/core/testing';

import { ElectroServiceService } from './electroService.service';

describe('ElectroServiceService', () => {
  let service: ElectroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
