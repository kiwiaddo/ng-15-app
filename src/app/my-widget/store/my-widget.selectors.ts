import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMyWidget from './my-widget.reducer';

export const selectMyWidgetState = createFeatureSelector<fromMyWidget.State>(
  fromMyWidget.myWidgetFeatureKey
);

export const selectFoo = createSelector(
  selectMyWidgetState,
  (state) => {
    return state.foo;
  }
);