import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelFahComponent } from './cel-fah/cel-fah.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
  },
  {
    path: 'cel-fah',
    component: CelFahComponent,
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then((m) => m.CrudModule),
  }, // auth redirect..
  {
    path: 'rxjs',
    loadChildren: () => import('./rxjs/rxjs.module').then((m) => m.RxjsModule),
  }, // auth redirect..
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
