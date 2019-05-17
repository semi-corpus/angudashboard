import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlocToDot } from '../bloctodot';

@Component({
  selector: 'app-bloc-todot-submited',
  templateUrl: './bloc-todot-submited.component.html',
  styleUrls: ['./bloc-todot-submited.component.sass']
})
export class BlocTodotSubmitedComponent {

  @Input() newBlocToDot: BlocToDot
  @Output() blocDelete = new EventEmitter<BlocToDot>()

  increaseDot() {
      let ii = 0;

      if (ii <= this.newBlocToDot.duration) {
      }
      if (this.newBlocToDot.position < this.newBlocToDot.duration) {
        this.newBlocToDot.position++;
      }
    }
    
  deleteBloc() {
    this.blocDelete.emit(this.newBlocToDot)
  }
}
