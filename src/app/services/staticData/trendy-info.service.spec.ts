import { TestBed } from '@angular/core/testing';

import { TrendyInfoService } from './trendy-info.service';

describe('TrendyInfoService', () => {
  let service: TrendyInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendyInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
