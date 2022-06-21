import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent implements OnInit {
  objmsg: any;
  constructor() {}

  ngOnInit(): void {
    const videos = interval(2000);
    videos.subscribe((res) => {
      this.objmsg = res;
      console.log('Video + ', res);
    });
  }
}
