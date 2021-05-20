import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent as StudentCreateComponent } from './student/create/create.component';
import { CreateComponent as TeacherCreateComponent } from './teacher/create/create.component';
import { ListComponent as StudentListComponent } from './student/list/list.component';
import { ListComponent as TeacherListComponent } from './teacher/list/list.component';

const routes: Routes = [
  { path: 'listStudent', component: StudentListComponent },
  { path: 'createStudent', component: StudentCreateComponent },
  { path: 'listTeacher', component: TeacherListComponent },
  { path: 'createTeacher', component: TeacherCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
