import { TestBed } from '@angular/core/testing';

import { MemoDetailGuard } from './memo-detail.guard';

describe('MemoDetailGuard', () => {
  let guard: MemoDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MemoDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
