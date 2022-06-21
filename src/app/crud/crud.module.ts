import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudCreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersListComponent } from './list/list.component';

@NgModule({
  declarations: [CrudCreateComponent, UsersListComponent],
  imports: [CommonModule, CrudRoutingModule, FormsModule, ReactiveFormsModule],
})
export class CrudModule {}
