import { Component, OnInit } from '@angular/core';
import { interval, Subscription, of } from 'rxjs';
import { filter, reduce, take } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  objmsg: any;
  videoSubscription: Subscription = new Subscription();
  inputval: any;
  val: any;
  constructor() {}

  ngOnInit(): void {
    const videos = interval(1000);
    this.videoSubscription = videos.subscribe((res) => {
      this.objmsg = res;
      console.log('this.objmsg inside ', this.objmsg);
      if (res == 5) {
        this.videoSubscription.unsubscribe();
      }
    });

    let test1 = of(
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    );
    let case1 = test1.pipe(
      filter((x) => x % 2 === 0),
      reduce((acc, one) => acc + one, 0)
    );
    case1.subscribe((x) => console.log(x));

    let test11 = interval(1000);
    let case11 = test11.pipe(take(10));
    case1.subscribe((x) => console.log(x));
  }
  inputVal(event: any) {
    this.inputval = event.target.value;
    console.log('value', this.inputval);
  }
}
