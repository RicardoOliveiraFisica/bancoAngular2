import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { ICep } from '../interfaces/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  api = environment.apiCep;
  constructor(private http: HttpClient) { }

  buscar(cep: String) {
    return this.http.get<ICep>(`${this.api}/${cep}/json/`);
  }
}
