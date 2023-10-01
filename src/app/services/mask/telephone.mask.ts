import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TelephoneMask {
  mask(value: string|number): string {
    let valorFormatado = value + '';
    valorFormatado = valorFormatado
        .replace(/[^0-9]/g, '')
        .substr(0, 11)
        .replace(/(\d)(\d{4})$/,"$1-$2")
    if (valorFormatado.length > 10 )
      valorFormatado = valorFormatado.replace(/(\d{2})(\d+)/, '($1) $2');
    return valorFormatado;
  }
}
