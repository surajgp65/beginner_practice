import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cel-fah',
  templateUrl: './cel-fah.component.html',
  styleUrls: ['./cel-fah.component.scss'],
})
export class CelFahComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  number: any = '';

  Celius: any;
  Fahernit: any;
  result1: any;
  result2: any;
  cel: any;
  fah: any;

  celius() {
    this.result1 = (this.Celius * 9.0) / 5.0 + 32;
  }

  fahernit() {
    this.result2 = ((this.Fahernit - 32) * 5) / 9;
  }

  getCelius(event: any) {
    const newC = (this.fah - 32) * (5 / 9);
    this.cel = newC;
    console.log('hello' + this.fah);
  }

  getFahernit(event: any) {
    const newF = this.cel * (9 / 5) + 32;
    this.fah = newF;
    console.log('hello' + newF);
  }
}
