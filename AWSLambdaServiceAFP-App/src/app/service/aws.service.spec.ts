import { TestBed } from '@angular/core/testing';

import { AwsService } from './aws.service';

describe('AwsServiceService', () => {
  let service: AwsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
