import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-range-bar',
  templateUrl: './range-bar.component.html',
  styleUrls: ['./range-bar.component.scss'],
})
export class RangeBarComponent {

  @Input() min!: number;
  @Input() max!: number;
  @Input() value!: number;

  constructor() { }

}
