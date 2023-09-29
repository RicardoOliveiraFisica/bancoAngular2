import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CpfMask {
  mask(value: string|number): string {
    let valorFormatado = value + '';
    valorFormatado = valorFormatado
        .replace(/[^0-9]/g, '')
        .substr(0, 11)
        .replace(/(\d{3})(\d+)/, '$1.$2');
    if (valorFormatado.length > 7)
      valorFormatado = valorFormatado.replace(/(\d{3})(\d+)/, '$1.$2');
    if (valorFormatado.length > 9)
      valorFormatado = valorFormatado.replace(/(\d{3})(\d+)/, '$1-$2');
    return valorFormatado;
  }
}
