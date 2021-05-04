import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListVeiculoComponent } from './list-veiculo/list-veiculo.component';
import { CreateVeiculoComponent } from './create-veiculo/create-veiculo.component';
import { VeiculoDetailComponent } from './veiculo-detail/veiculo-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListVeiculoComponent,
    CreateVeiculoComponent,
    VeiculoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
