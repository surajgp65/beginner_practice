import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  number: any = '';

  Celius: any;
  Fahernit: any;
  result1: any;
  result2: any;

  celius() {
    this.result1 = (this.Celius * 9.0) / 5.0 + 32;
  }

  fahernit() {
    this.result2 = ((this.Fahernit - 32) * 5) / 9;
  }
  ngOnInit(): void {}
}
