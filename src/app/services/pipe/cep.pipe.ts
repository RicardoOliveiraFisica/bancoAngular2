// cep.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
@Pipe({ name: 'cep' })
export class CepPipe implements PipeTransform {
  transform(value: string|number): string {
    let valorFormatado = value + '';

    valorFormatado = valorFormatado
        .replace(/[^0-9]/g, '')
        .substr(0, 8)
        .replace(
            /(\d{5})(\d{3})/,
            '$1-$2'
        );

    return valorFormatado;
  }
}
