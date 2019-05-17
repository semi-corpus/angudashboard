import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlocPerf } from '../blocperf';

@Component({
  selector: 'app-bloc-perf-submited',
  templateUrl: './bloc-perf-submited.component.html',
  styleUrls: ['./bloc-perf-submited.component.sass']
})
export class BlocPerfSubmitedComponent {

  @Input() newBlocPerf: BlocPerf
  @Output() blocDelete = new EventEmitter<BlocPerf>()

  deleteBloc(){
    this.blocDelete.emit(this.newBlocPerf)
  }
}
