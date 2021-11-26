import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AnularformsComponent } from './anularforms/anularforms.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    AnularformsComponent
=======
import { ReactformComponent } from './reactform/reactform.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactformComponent
>>>>>>> 72c7ae831ddb980ebe2fe0d12590fc4a0211e6a1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule,
    HttpClientModule
=======
    ReactiveFormsModule
>>>>>>> 72c7ae831ddb980ebe2fe0d12590fc4a0211e6a1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
