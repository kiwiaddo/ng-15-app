import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, take } from 'rxjs/operators';
import { Observable, of, interval } from 'rxjs';
import * as MyWidgetActions from './my-widget.actions';
import { State } from './my-widget.reducer';


@Injectable()
export class MyWidgetEffects {

  getMyWidgets$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(MyWidgetActions.getMyWidgets),
      concatMap(() =>
        interval(5000).pipe(
          take(1),
          map(_ => MyWidgetActions.getMyWidgetsSuccess({ data: { foo: 'star'}})),
          catchError(error => of(MyWidgetActions.getMyWidgetsFailure({ error })))
      )
    ));
  });


  constructor(private actions$: Actions) {}
}
