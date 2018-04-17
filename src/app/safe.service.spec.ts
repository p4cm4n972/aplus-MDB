import { TestBed, inject } from '@angular/core/testing';

import { SafePipe } from './safe.service';

describe('SafePipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafePipe]
    });
  });

  it('should be created', inject([SafePipe], (service: SafePipe) => {
    expect(service).toBeTruthy();
  }));
});
