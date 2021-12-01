import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string): string {

    switch (value.length) {
      case 8:
        return `${value.substr(0, 4)}-${value.substr(4, 4)}`;
      case 10:
        return `(0${value.substr(0, 2)}) ${value.substr(2, 4)}-${value.substr(6, 4)}`;
      case 11:
        return `(${value.substr(0, 3)}) ${value.substr(3, 4)}-${value.substr(7, 4)}`;
      default:
        return value;
    }
  }

}
