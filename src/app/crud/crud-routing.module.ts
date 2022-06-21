import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudCreateComponent } from './create/create.component';
import { UsersListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: 'create',
    component: CrudCreateComponent,
  },
  {
    path: 'edit/:id',
    component: CrudCreateComponent,
  },
  {
    path: 'list',
    component: UsersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
