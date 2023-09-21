import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { IClient } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  endpoint = 'clientes'
  api = environment.api;
  constructor(private http: HttpClient) { }

  buscarTodosClientes() {
    return this.http.get<IClient[]>(`${this.api}/${this.endpoint}`);
  }
}
