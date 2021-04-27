import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string, dotSeparator: boolean): string {
    let result = value.substring(0, 3) + '.' +
      value.substring(3, 6) + '.' +
      value.substring(6, 9)

    if (dotSeparator) {
      result += '.'
    } else {
      result += '-'
    }

    return result + value.substring(9);
  }
}
