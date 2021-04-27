import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(telefone: string, ddd: string): string {
    let result = ''
    if (ddd) {
      result = '(' + ddd + ') '
    }

    return result + telefone.substring(0, 5) + '-' +
      telefone.substring(5)
  }
}
