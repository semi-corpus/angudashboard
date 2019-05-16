import { Component } from '@angular/core';
import { BlocToDot } from '../bloctodot';

@Component({
  selector: 'app-bloc-todot',
  templateUrl: './bloc-todot.component.html',
  styleUrls: ['./bloc-todot.component.sass']
})
export class BlocTodotComponent {

  newBlocToDot = new BlocToDot();

}
