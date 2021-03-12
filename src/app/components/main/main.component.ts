import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModel } from '@models/user.model';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { LocalStorageService } from '@services/local-storage.service';
import { Subscription } from 'rxjs';
import { AuthFacadeService } from '../login/auth.facade.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  public user?: UserModel
  public subs: Subscription = new Subscription();
  constructor(private localStorageService: LocalStorageService, private authFacade: AuthFacadeService, private utilService: UtilsService ) {  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.user = this.localStorageService.getItem('user');
    if (this.user !== null) {
      this.authFacade.setUser(this.user);
      this.suscribirUsuario();
    }
  }
  suscribirUsuario(): void {
    let sub: Subscription = this.authFacade
      .getCurrentUser$()
      .subscribe((user: UserModel | null) => {
        if (user) {
          this.user = {
            ...user
          }
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
}
