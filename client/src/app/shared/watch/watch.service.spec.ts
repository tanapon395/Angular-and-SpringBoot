import { TestBed, inject } from '@angular/core/testing';

import { WatchService } from './watch.service';

describe('WatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchService]
    });
  });

  it('should be created', inject([WatchService], (service: WatchService) => {
    expect(service).toBeTruthy();
  }));
});
