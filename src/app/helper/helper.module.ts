import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { HelperHomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    CheckboxComponent,
    HelperHomeComponent
  ],
  imports: [
    CommonModule,
    HelperRoutingModule
  ]
})
export class HelperModule { }
