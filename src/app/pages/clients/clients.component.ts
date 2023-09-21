import { Component } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  constructor (private clientsService: ClientsService) {}

  ngOnInit() {
    this.clientsService.buscarTodosClientes().subscribe( result => {
      console.log(result);
    });
  }
}
