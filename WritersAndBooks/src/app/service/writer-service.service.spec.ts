import { TestBed } from '@angular/core/testing';

import { WriterServiceService } from './writer-service.service';

describe('WriterServiceService', () => {
  let service: WriterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
