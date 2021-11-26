import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnularformsComponent } from './anularforms/anularforms.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    AnularformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
