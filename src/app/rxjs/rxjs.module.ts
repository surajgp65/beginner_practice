import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule } from './rxjs-routing.module';
import { IntervalComponent } from './interval/interval.component';
import { OfFromComponent } from './of-from/of-from.component';

@NgModule({
  declarations: [IntervalComponent, OfFromComponent],
  imports: [CommonModule, RxjsRoutingModule],
})
export class RxjsModule {}
