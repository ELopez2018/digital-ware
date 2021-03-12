import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from "@environments/environment";
import { AuthFacadeService } from '@root/components/login/auth.facade.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})

export class HeaderComponent implements OnInit {
  subs: Subscription = new Subscription();
  user: any;
  constructor(private authfacade: AuthFacadeService) { }
  ngOnInit(): void {
    this.obtenerUsuario()
  }
  obtenerUsuario() {
    this.authfacade.getCurrentUser$().subscribe(user => this.user = user )
  }
  logout(): void {
    this.authfacade.logout();
  }
}
