/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FlexLayoutAppComponent } from './flex-layout-app.component';

describe('Component - FlexLayoutAppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlexLayoutAppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(FlexLayoutAppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
