import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LoadingComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,

  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    LoadingComponent,

  ]
})
export class SharedModule { }
