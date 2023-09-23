import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import { ClientsService } from 'src/app/services/clients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients: IClient[] = [];
  constructor (private clientsService: ClientsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.clientsService.buscarTodosClientes().subscribe((result: IClient[]) => {
      this.clients = result;
    });
  }

  delete(cpf: string) {
  //  const cpf = this.route.snapshot.paramMap.get('cpf');
    if (cpf) {
      this.clientsService.deletarClientePeloCpf(cpf).subscribe(result => {
        Swal.fire(
          'Deletado!',
          'Cadastro deletado com sucesso!',
          'success'
        )
      }, error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Cadastro não deletado!',
          footer: (error.error.errors ? error.error.errors[0].defaultMessage : error.error.message)
        })
      });
    }
  }

}
