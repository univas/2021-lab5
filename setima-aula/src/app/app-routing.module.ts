import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tela1Component } from './tela1/tela1.component';
import { Tela2Component } from './tela2/tela2.component';
import { Tela3Component } from './tela3/tela3.component';

const routes: Routes = [
  { path: 'tela-um', component: Tela1Component },
  { path: 'tela-dois', component: Tela2Component },
  { path: 'tela-tres' , component: Tela3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
