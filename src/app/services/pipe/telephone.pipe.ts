// telephone.pipe.ts

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'telephone'})
export class TelephonePipe implements PipeTransform {

  transform(value: string | number): string {
    let valorFormatado = value + '';

      valorFormatado = valorFormatado
          .replace(/[^0-9]/g, '')
          .substr(0, 11)
          .replace(/(\d{2})(\d)/,"($1) $2")
          .replace(/(\d)(\d{4})$/,"$1-$2")
          /* .replace(                           // item 4
              /(\d{2})(\d{4})(\d{4})/,
              '($1) $2-$3'
          );*/
    return valorFormatado;
   /*  let telephoneString = value + '';

    telephoneString = telephoneString.replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(-\d{4})\d+$/, '$1');

    return telephoneString; */
  }

}
