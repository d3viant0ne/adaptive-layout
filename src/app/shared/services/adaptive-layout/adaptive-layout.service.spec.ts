/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdaptiveLayoutService } from './adaptive-layout.service';

describe('AdaptiveLayoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdaptiveLayoutService]
    });
  });

  it('should ...', inject([AdaptiveLayoutService], (service: AdaptiveLayoutService) => {
    expect(service).toBeTruthy();
  }));
});
