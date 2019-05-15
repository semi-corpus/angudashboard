import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AsideComponent } from './aside/aside.component';
import { BlocPerfComponent } from './bloc-perf/bloc-perf.component';
import { BlocTodotComponent } from './bloc-todot/bloc-todot.component';
import { BlocIntroComponent } from './bloc-intro/bloc-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    AsideComponent,
    BlocPerfComponent,
    BlocTodotComponent,
    BlocIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
