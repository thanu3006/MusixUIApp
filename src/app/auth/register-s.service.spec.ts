import { TestBed } from '@angular/core/testing';

import { RegisterSService } from './register-s.service';

describe('RegisterSService', () => {
  let service: RegisterSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
