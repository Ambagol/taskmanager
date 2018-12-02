import { TestBed } from '@angular/core/testing';

import { InterlinkService } from './interlink.service';

describe('InterlinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterlinkService = TestBed.get(InterlinkService);
    expect(service).toBeTruthy();
  });
});
