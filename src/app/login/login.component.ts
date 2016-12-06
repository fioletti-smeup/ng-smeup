import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { UserActions } from '../user/user.actions';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './login.component.html',
  styles: [`#my-logout-button { background: #F44336 }`]
})

export class LoginComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  form: FormGroup;
  nameLabel = 'Enter your name';
  passwordLabel = 'Enter password';
  user: User;
  user$: Observable<User>;
  constructor(
    fb: FormBuilder,
    private store: Store<AppState>,
    private userActions: UserActions,
    private userService: UserService
  ) {
    this.form = fb.group({
      name: '',
      password: ''
    });
    this.user$ = this.store.select(state => state.user.user);
    this.user$.takeUntil(this.destroyed$)
      .subscribe(user => { this.user = user; });
  }

  ngOnInit() {
    this.form.get('name').setValue(this.user.name);
  }

  // clearName() {
  //   this.store.dispatch(this.userActions.editUser(
  //     Object.assign({}, this.user, { name: '' }
  //     )));

  //   this.form.get('name').setValue('');
  // }

  logout() {
    this.store.dispatch(this.userActions.logout());
  }

  // submitState() {
  //   this.store.dispatch(this.userActions.editUser(
  //     Object.assign({}, this.user, { name: this.form.get('name').value }
  //     )));
  // }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  login(): boolean {
    this.userService.login(this.form.get('name').value, this.form.get('password').value);
    return false;
  }
}
