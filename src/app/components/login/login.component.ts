import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { UserModel } from '@models/user.model';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { LocalStorageService } from '@services/local-storage.service';
import { Subscription } from 'rxjs';
import { AuthFacadeService } from './auth.facade.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  user: any;
  constructor(
    private authFacade: AuthFacadeService,
    private router: Router,
    private fb: FormBuilder,
    private utilService: UtilsService,
    private localStorageService: LocalStorageService
  ) {
    this.form = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  subs: Subscription = new Subscription();
  ngOnInit(): void {

    this.user = this.localStorageService.getItem('user');
    if (this.user !== null) {
      this.authFacade.setUser(this.user);
      this.suscribirUsuario();
    }
  }
  createForm(): void {
    this.form = this.fb.group({
      email: [],
      password: [],
    });
  }
  suscribirUsuario(): void {
    let sub: Subscription = this.authFacade
      .getCurrentUser$()
      .subscribe((user: UserModel | null) => {
        if (user) {
          this.router.navigateByUrl('/main');
        }
      });
    this.subs.add(sub);

    let sub2: Subscription = this.authFacade
      .isLoadingAuth$()
      .subscribe((loading: boolean) => {
        if (loading) {
          this.utilService.loading(loading);
        }
      });
    this.subs.add(sub2);
  }
  login(): void {
    let values = this.form.value;
    this.authFacade.login(values);
  }
}
