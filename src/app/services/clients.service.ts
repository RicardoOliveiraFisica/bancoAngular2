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

  cadastrarCliente(client: IClient) {
    return this.http.post(`${this.api}/${this.endpoint}`, client);
  }

  buscarClientePorCpf(cpf: string) {
    return this.http.get<IClient>(`${this.api}/${this.endpoint}/${cpf}`);
  }

}
