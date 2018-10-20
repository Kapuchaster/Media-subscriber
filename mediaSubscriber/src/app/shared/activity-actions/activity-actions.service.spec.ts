import { TestBed, inject } from '@angular/core/testing';

import { ActivityActionsService } from './activity-actions.service';

describe('ActivityActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityActionsService]
    });
  });

  it('should be created', inject([ActivityActionsService], (service: ActivityActionsService) => {
    expect(service).toBeTruthy();
  }));
});
