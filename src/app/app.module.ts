import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaugeModule } from 'ng4-gauge-component/gauge/gauge.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
