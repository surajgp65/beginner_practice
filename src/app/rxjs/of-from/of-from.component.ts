import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss'],
})
export class OfFromComponent implements OnInit {
  data1: any;
  data2: any;
  constructor() {}

  ngOnInit(): void {
    const obj1 = of('Deepak', 'Suraj', 'atul');
    const obj2 = from(['Deepak', 'Suraj', 'atul', 'hemant']);
    obj1.subscribe((res: any) => {
      this.data1 = res;
      console.log(res);
    });
    obj2.subscribe((res: any) => {
      this.data2 = res;
      console.log(res);
    });

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    promise.then((res) => {
      console.log('done', res);
    });
  }
}
