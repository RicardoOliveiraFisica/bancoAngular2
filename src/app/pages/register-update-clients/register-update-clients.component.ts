import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICep } from 'src/app/interfaces/cep';
import { IClient } from 'src/app/interfaces/client';
import { CepService } from 'src/app/services/cep.service';
import { ClientsService } from 'src/app/services/clients.service';
import { CpfMask } from 'src/app/services/mask/cpf.mask';
import { CepMask } from 'src/app/services/mask/cep.mask';
import { TelephoneMask } from 'src/app/services/mask/telephone.mask';
import { CpfPipe } from 'src/app/services/pipe/cpf.pipe';
import { TelephonePipe } from 'src/app/services/pipe/telephone.pipe';
import Swal from 'sweetalert2';
import { CepPipe } from 'src/app/services/pipe/cep.pipe';

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
    cidade: new FormControl(''),
    rendimentoMensal: new FormControl(1.00, Validators.required)
  });


  constructor(private clientsService: ClientsService,
              private route: ActivatedRoute,
              private router: Router,
              private cpfMask: CpfMask,
              private cepMask: CepMask,
              private telephoneMask: TelephoneMask,
              private cpfPipe: CpfPipe,
              private cepPipe: CepPipe,
              private telePhonePipe: TelephonePipe,
              private cepService: CepService
  ) {}

  typeCrud = 'register';
 // private cpfMask = new CpfMask();
 // private cpfPipe = new CpfPipe();

  ngOnInit() {
    const cpf = this.route.snapshot.paramMap.get('cpf');

    if (cpf) {
      this.typeCrud = 'edit';
      this.clientsService.buscarClientePorCpf(cpf).subscribe((client: IClient) => {
        this.clientForm.setValue({
          nome: client.nome || '',
          cpf: this.cpfPipe.transform(client.cpf) || '',
          telefone: this.telePhonePipe.transform(client.telefone) || '',
          rua: client.rua || '',
          numero: client.numero || 0,
          cep: this.cepPipe.transform(client.cep) || '',
          cidade: '',
          rendimentoMensal: client.rendimentoMensal || 1.00
        });
        this.clientForm.get('cpf')?.disable();
        this.consultaCep();
      }, error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Cadastro não encontrado!',
          footer: (error.error.errors ? error.error.errors[0].defaultMessage : error.error.message)
        })
      });
    }
  }

  registerOrUpdate() {
    const cpf = this.route.snapshot.paramMap.get('cpf');
    const cpfNaoFormatado = this.clientForm.get('cpf')?.value;
    this.clientForm.get('cpf')?.setValue(cpfNaoFormatado?.replace(/\D/g,'') + '');
    const telephoneNaoFormatado = this.clientForm.get('telefone')?.value;
    this.clientForm.get('telefone')?.setValue(telephoneNaoFormatado?.replace(/\D/g,'') + '');
    if (cpf) {
      this.update(cpf);
     }
    else {
      this.register();
    }
  }

  register() {
    const client: IClient = this.clientForm.value as IClient;
    this.clientsService.cadastrarCliente(client).subscribe(result => {
      Swal.fire(
        'Cadastrado!',
        'Cadastro realizado com sucesso!',
        'success'
      );
      this.router.navigate(['/clients']);

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

  update(cpf: string) {
   // const client: IClient = this.clientForm.value as IClient; //nao pega campo cpf desabilitado
    const client: IClient = this.clientForm.getRawValue() as IClient; //pega campo cpf desabilitado
    this.clientsService.atualizarClientePeloCpf(cpf, client).subscribe(result => {
      Swal.fire(
        'Atualizado!',
        'Cadastro atualizado com sucesso!',
        'success'
      );
      this.router.navigate(['/clients']);

    }, error => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Cadastro não atualizado!',
        footer: (error.error.errors ? error.error.errors[0].defaultMessage : error.error.message)
      })
    });
  }

  getCpfMask() {
    const value = this.clientForm.get('cpf')?.value;
    let valorFormatado = this.cpfMask.mask(value + '');
    this.clientForm.get('cpf')?.setValue(valorFormatado);
  }

  getCepMask() {
    const value = this.clientForm.get('cep')?.value;
    let valorFormatado = this.cepMask.mask(value + '');
    this.clientForm.get('cep')?.setValue(valorFormatado);
  }

  getTelephoneMask() {
    const value = this.clientForm.get('telefone')?.value;
    let valorFormatado = this.telephoneMask.mask(value + '');
    this.clientForm.get('telefone')?.setValue(valorFormatado);
  }

  consultaCep() {
    const cep = this.clientForm.get('cep')?.value + '';
    this.cepService.buscar(cep).subscribe( (info: ICep) => {
      this.clientForm.get('cidade')?.setValue(info.localidade + '');
      this.clientForm.get('rua')?.setValue(info.logradouro + '');
    });
  }

}
