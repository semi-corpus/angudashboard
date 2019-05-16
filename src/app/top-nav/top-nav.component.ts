import { Component, Output, EventEmitter } from '@angular/core';
import { BlocPerf } from '../blocperf';
import { BlocToDot } from '../bloctodot';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent {

  @Output() blocCreated = new EventEmitter()

  menuHidden = true;


  toggleMenu() {
    this.menuHidden = !this.menuHidden
  }
  closeMenu(){
    this.menuHidden = true
  }
  addBlocPerf() {
    this.blocCreated.emit(BlocPerf)
  }
  addBlocToDot(){
    this.blocCreated.emit(BlocToDot)
  }
}

