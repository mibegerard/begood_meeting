import { TestBed } from '@angular/core/testing';

import { CSVImportService } from './csvimport-service';

describe('CSVImportServiceService', () => {
  let service: CSVImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSVImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
