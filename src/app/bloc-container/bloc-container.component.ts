import { Component, Input } from '@angular/core';
import { BlocPerf} from '../blocperf';
import {BlocToDot } from '../bloctodot';

@Component({
  selector: 'app-bloc-container',
  templateUrl: './bloc-container.component.html',
  styleUrls: ['./bloc-container.component.sass']
})
export class BlocContainerComponent  {
  
  @Input() blocList: Array<BlocPerf | BlocToDot>
}
