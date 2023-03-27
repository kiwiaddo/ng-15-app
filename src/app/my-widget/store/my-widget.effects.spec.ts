import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MyWidgetEffects } from './my-widget.effects';

describe('MyWidgetEffects', () => {
  let actions$: Observable<any>;
  let effects: MyWidgetEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyWidgetEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(MyWidgetEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
