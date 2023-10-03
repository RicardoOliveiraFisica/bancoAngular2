import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './components/navebar/navebar.component';
import { ButtonComponent } from './components/button/button.component';
import { HomeComponent } from './pages/home/home.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { LoansComponent } from './pages/loans/loans.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUpdateClientsComponent } from './pages/register-update-clients/register-update-clients.component';
import { ReactiveFormsModule } from '@angular/forms';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CpfPipe } from './services/pipe/cpf.pipe';
import { TelephonePipe } from './services/pipe/telephone.pipe';
import { CepPipe } from './services/pipe/cep.pipe';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    ButtonComponent,
    HomeComponent,
    ClientsComponent,
    LoansComponent,
    RegisterUpdateClientsComponent,
    CpfPipe,
    TelephonePipe,
    CepPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
