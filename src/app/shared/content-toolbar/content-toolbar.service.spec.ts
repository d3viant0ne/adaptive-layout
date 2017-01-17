/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContentToolbarService } from './content-toolbar.service';

describe('ContentToolbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentToolbarService]
    });
  });

  it('should ...', inject([ContentToolbarService], (service: ContentToolbarService) => {
    expect(service).toBeTruthy();
  }));
});
