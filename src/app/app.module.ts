import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AsideComponent } from './aside/aside.component';
import { BlocPerfComponent } from './bloc-perf/bloc-perf.component';
import { BlocTodotComponent } from './bloc-todot/bloc-todot.component';
import { BlocContainerComponent } from './bloc-container/bloc-container.component';
import { BlocPerfSubmitedComponent } from './bloc-perf-submited/bloc-perf-submited.component';
import { BlocTodotSubmitedComponent } from './bloc-todot-submited/bloc-todot-submited.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    AsideComponent,
    BlocPerfComponent,
    BlocTodotComponent,
    BlocContainerComponent,
    BlocPerfSubmitedComponent,
    BlocTodotSubmitedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ClickOutsideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
