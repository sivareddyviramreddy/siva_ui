import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelperHomeComponent } from './home/home.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

const routes: Routes = [
  {
    path: '',
    component: HelperHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'input'
      },
      {
        path: 'input',
        component: InputComponent
      },
      {
        path: 'radio',
        component: RadioComponent
      },
      {
        path: 'checkbox',
        component: CheckboxComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelperRoutingModule { }
