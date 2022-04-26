import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThreeWayToggleComponent } from './three-way-toggle.component';



@NgModule({
  declarations: [
    ThreeWayToggleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ThreeWayToggleComponent
  ]
})
export class ThreeWayToggleModule { }
