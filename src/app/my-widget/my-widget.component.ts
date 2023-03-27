import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getMyWidgets, AddWidgetActions } from './store/my-widget.actions';
import { State } from './store/my-widget.reducer';
import { selectFoo } from './store/my-widget.selectors';

@Component({
  selector: 'app-my-widget',
  templateUrl: './my-widget.component.html',
  styleUrls: ['./my-widget.component.scss']
})
export class MyWidgetComponent implements OnInit {
  @Input() public bar!: string;
  foo$ = this.store.select(selectFoo);

  constructor (private store: Store) {
    
  }

  public ngOnInit () {
    this.store.dispatch(getMyWidgets());
  }

  public addWidget () {
    this.store.dispatch(AddWidgetActions.addmywidget('go'));
  }
}
