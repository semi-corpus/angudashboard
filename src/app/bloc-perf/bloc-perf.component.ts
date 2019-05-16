import { Component } from '@angular/core';
import { BlocPerf } from '../blocperf';

@Component({
  selector: 'app-bloc-perf',
  templateUrl: './bloc-perf.component.html',
  styleUrls: ['./bloc-perf.component.sass']
})
export class BlocPerfComponent{

  newBlocPerf = new BlocPerf();
 
}