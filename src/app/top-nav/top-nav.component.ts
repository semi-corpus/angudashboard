import { Component, Input,} from '@angular/core';
import { BlocPerf } from '../blocperf';
import { BlocToDot } from '../bloctodot';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent {

  @Input()
  
  menuHidden = true;
 

  toggleMenu() {
    this.menuHidden = !this.menuHidden
  }
  onClickedOutside(){
    this.menuHidden = true
    }
    creatBlocPerf(){

    }
  }

