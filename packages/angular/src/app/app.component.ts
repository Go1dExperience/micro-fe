import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title: string = 'Angular MF'
}
// import {Component} from '@angular/core';


// /** @title Date range picker comparison ranges */
// @Component({
//   selector: 'date-range-picker-comparison-example',
//   templateUrl: 'date-range-picker-comparison-example.html',
//   styleUrls: ['date-range-picker-comparison-example.css'],
// })
// export class DateRangePickerComparisonExample {
//   campaignOne = new FormGroup({
//     start: new FormControl(new Date(year, month, 13)),
//     end: new FormControl(new Date(year, month, 16)),
//   });
//   campaignTwo = new FormGroup({
//     start: new FormControl(new Date(year, month, 15)),
//     end: new FormControl(new Date(year, month, 19)),
//   });
// }