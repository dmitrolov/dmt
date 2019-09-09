import {Component} from '@angular/core';

import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dmt';
  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  msg1() {
    this.store.dispatch({type: 'SPANISH', value: 'hello'});
  }

  msg2() {
    this.store.dispatch({type: 'FRENCH'});
  }
}
