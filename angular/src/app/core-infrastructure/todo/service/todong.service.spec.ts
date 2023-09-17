import { TestBed } from '@angular/core/testing';

import { TodongService } from './todong.service';

describe('TodongService', () => {
  let service: TodongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
