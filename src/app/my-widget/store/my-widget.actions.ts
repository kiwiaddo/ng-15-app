import { createAction, createActionGroup, props, emptyProps } from '@ngrx/store';
import { State } from './my-widget.reducer';

export const getMyWidgets = createAction(
  '[MyWidget] Get MyWidgets'
);

export const getMyWidgetsSuccess = createAction(
  '[MyWidget] Get MyWidgets Success',
  props<{ data: State }>()
);

export const getMyWidgetsFailure = createAction(
  '[MyWidget] Get MyWidgets Failure',
  props<{ error: any }>()
);

export const AddWidgetActions = createActionGroup({
  source: 'MyWidget2',
  events: {
    'AddMyWidget': (name: string) => ({ name }),
    'AddMyWidgetSuccess': emptyProps(),
    'AddMyWidgetFailure': emptyProps()
  }
});