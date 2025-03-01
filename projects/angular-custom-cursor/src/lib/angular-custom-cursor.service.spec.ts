import { TestBed } from '@angular/core/testing';

import { AngularCustomCursorService } from './angular-custom-cursor.service';

describe('AngularCustomCursorService', () => {
  let service: AngularCustomCursorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCustomCursorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
