import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CepMask {
  mask(value: string|number): string {
    let valorFormatado = value + '';
    valorFormatado = valorFormatado
        .replace(/\D/g, '')
        .substr(0, 8);
    if (valorFormatado.length > 5)
      valorFormatado = valorFormatado.replace(/(\d{5})(\d+)/, '$1-$2');
    return valorFormatado;
  }
}
