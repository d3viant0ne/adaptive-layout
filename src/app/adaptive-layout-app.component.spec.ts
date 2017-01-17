/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AdaptiveLayoutAppComponent } from './adaptive-layout-app.component';

describe('Component - AdaptiveLayoutAppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AdaptiveLayoutAppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AdaptiveLayoutAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
