import { Component } from '@angular/core';
import { BlocPerf } from './blocperf';
import { BlocToDot } from './bloctodot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'AnguDash';

  private blocList: Array<BlocPerf | BlocToDot> = []

  addBlocs(event: any) {
    this.blocList.push(new event())
  }
}
