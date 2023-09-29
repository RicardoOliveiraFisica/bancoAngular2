// cpf.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
    transform(value: string|number): string {
      let valorFormatado = value + '';

      valorFormatado = valorFormatado
          //.replace(/[^0-9]/, '')              // item 3
          .replace(/[^0-9]/g, '')              // item 3
          .padStart(11, '0')                  // item 1
          .substr(0, 11)                      // item 2
          .replace(                           // item 4
              /(\d{3})(\d{3})(\d{3})(\d{2})/,
              '$1.$2.$3-$4'
          );

      return valorFormatado;
    }
}
