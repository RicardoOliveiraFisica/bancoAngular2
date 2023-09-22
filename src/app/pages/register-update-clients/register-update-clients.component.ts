import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import { ClientsService } from 'src/app/services/clients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-update-clients',
  templateUrl: './register-update-clients.component.html',
  styleUrls: ['./register-update-clients.component.css']
})
export class RegisterUpdateClientsComponent {

  clientForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    rua: new FormControl('', Validators.required),
    numero: new FormControl(0, Validators.required),
    cep: new FormControl('', Validators.required),
    rendimentoMensal: new FormControl(1.00, Validators.required)
  });

  constructor(private clientsService: ClientsService) {}

  register() {
    const client: IClient = this.clientForm.value as IClient;
    this.clientsService.cadastrarCliente(client).subscribe(result => {
      Swal.fire(
        'Cadastrado!',
        'Cadastro realizado com sucesso!',
        'success'
      );

    }, error => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cadastro não realizado!',
        footer: (error.error.errors ? error.error.errors[0].defaultMessage : error.error.message)
      })
    });
  }
}
