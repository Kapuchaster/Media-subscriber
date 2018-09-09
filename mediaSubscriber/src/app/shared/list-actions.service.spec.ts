import { TestBed, inject } from '@angular/core/testing';

import { ListActionsService } from './list-actions.service';

describe('ListActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListActionsService]
    });
  });

  it('should be created', inject([ListActionsService], (service: ListActionsService) => {
    expect(service).toBeTruthy();
  }));
});
