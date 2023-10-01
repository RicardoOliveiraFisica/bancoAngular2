// telephone.pipe.ts

import {Pipe, PipeTransform} from '@angular/core';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

@Pipe({name: 'telephone'})
export class TelephonePipe implements PipeTransform {

  transform(value: string | number): string {
    let valorFormatado = value + '';

      valorFormatado = valorFormatado
          .replace(/[^0-9]/g, '')
          .substr(0, 11)
          .replace(/(\d{2})(\d)/,"($1) $2")
          .replace(/(\d)(\d{4})$/,"$1-$2")
    return valorFormatado;
  }
}
