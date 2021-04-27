import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CpfPipe } from './cpf.pipe';
import { TelefonePipe } from './telefone.pipe';

import pt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'

registerLocaleData(pt)

@NgModule({
  declarations: [
    AppComponent,
    CpfPipe,
    TelefonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
