import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GaugeComponent} from "./gauge.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GaugeComponent],
  declarations: [GaugeComponent]
})
export class GaugeModule { }
