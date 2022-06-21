import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelFahComponent } from './cel-fah/cel-fah.component';
import { HttpErrorInterceptor } from './common-services/http-error.interceptor';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [AppComponent, CelFahComponent, ProjectListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,

      useClass: HttpErrorInterceptor,

      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
