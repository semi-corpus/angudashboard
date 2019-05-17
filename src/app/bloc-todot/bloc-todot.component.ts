import { Component, Input } from '@angular/core';
import { BlocToDot } from '../bloctodot';

@Component({
  selector: 'app-bloc-todot',
  templateUrl: './bloc-todot.component.html',
  styleUrls: ['./bloc-todot.component.sass']
})
export class BlocTodotComponent {

  @Input() newBlocToDot : BlocToDot;

  addBlocToDotSubmited(){
    this.newBlocToDot.lock = true
    this.newBlocToDot.position = 0
  }
}
