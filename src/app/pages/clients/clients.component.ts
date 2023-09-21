import { Component } from '@angular/core';
import { IClient } from 'src/app/interfaces/client';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: IClient[] = [];
  constructor (private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService.buscarTodosClientes().subscribe((result: IClient[]) => {
      this.clients = result;
    });
  }
}
