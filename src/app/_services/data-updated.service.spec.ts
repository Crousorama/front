import { TestBed } from '@angular/core/testing';

import { DataUpdatedService } from './data-updated.service';

describe('DataUpdatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataUpdatedService = TestBed.get(DataUpdatedService);
    expect(service).toBeTruthy();
  });
});
