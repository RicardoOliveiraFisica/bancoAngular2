import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    ButtonComponent,
    HomeComponent,
    ClientsComponent,
    LoansComponent,
    RegisterUpdateClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
