import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exercie1Component } from './exercie1/exercie1.component';
import { Exercie3Component } from './exercie3/exercie3.component';
import { Exercie4Component } from './exercie4/exercie4.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    Exercie1Component,
    Exercie3Component,
    Exercie4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
