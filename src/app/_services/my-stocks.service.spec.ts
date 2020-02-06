import { TestBed } from '@angular/core/testing';

import { MyStocksService } from './my-stocks.service';

describe('MyStocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyStocksService = TestBed.get(MyStocksService);
    expect(service).toBeTruthy();
  });
});
