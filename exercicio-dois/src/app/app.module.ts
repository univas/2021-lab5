import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent as StudentCreateComponent } from './student/create/create.component';
import { ListComponent as StudentListComponent } from './student/list/list.component';
import { DetailComponent as StudentDetailComponent } from './student/detail/detail.component';
import { CreateComponent as TeacherCreateComponent } from './teacher/create/create.component';
import { ListComponent as TeacherListComponent } from './teacher/list/list.component';
import { DetailComponent as TeacherDetailComponent } from './teacher/detail/detail.component';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonComponent } from './person/person.component';
import { CreatePersonComponent } from './person/create-person/create-person.component';
import { ListPersonComponent } from './person/list-person/list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentCreateComponent,
    StudentListComponent,
    StudentDetailComponent,
    TeacherCreateComponent,
    TeacherListComponent,
    TeacherDetailComponent,
    PagenotfoundComponent,
    PersonComponent,
    CreatePersonComponent,
    ListPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
