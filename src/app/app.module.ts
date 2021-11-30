import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnularformsComponent } from './anularforms/anularforms.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactformComponent } from './reactform/reactform.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [AppComponent, AnularformsComponent, ReactformComponent, ParentComponent, ChildComponent, CourseListComponent, CourseDetailsComponent, PagenotfoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
