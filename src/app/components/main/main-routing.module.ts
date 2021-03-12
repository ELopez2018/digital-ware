import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'administracion-usuarios',
        loadChildren: () =>
          import('../user-management/user-management.module').then(
            (m) => m.UserManagementModule
          ),
      },
      {
        path: 'lista-de-usuarios',
        loadChildren: () =>
          import('../user-list/user-list.module').then((m) => m.UserListModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
