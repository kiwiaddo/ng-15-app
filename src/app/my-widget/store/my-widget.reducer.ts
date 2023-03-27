import { Action, createReducer, on } from '@ngrx/store';
import * as MyWidgetActions from './my-widget.actions';

export const myWidgetFeatureKey = 'myWidget';

export interface State {
  foo: string
}

export const initialState: State = {
  foo: ''
};

export const reducer = createReducer(
  initialState,

  on(MyWidgetActions.getMyWidgets, state => state),
  on(MyWidgetActions.getMyWidgetsSuccess, (state, action) => ({ foo: action.data.foo })),
  on(MyWidgetActions.getMyWidgetsFailure, (state, action) => state),
  on(MyWidgetActions.AddWidgetActions.addmywidget, (state, action) => ({ foo: action.name })),

);
