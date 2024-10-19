import { TestBed } from '@angular/core/testing';

import { SearchForUserService } from './search-for-user.service';

describe('SearchForUserService', () => {
  let service: SearchForUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchForUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
