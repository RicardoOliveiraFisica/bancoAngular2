import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { LoansComponent } from './pages/loans/loans.component';
import { RegisterUpdateClientsComponent } from './pages/register-update-clients/register-update-clients.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'clients/create', component: RegisterUpdateClientsComponent },
  { path: 'clients/edit/:cpf', component: RegisterUpdateClientsComponent },
  /* { path: "clients/delete/:cpf", component: ClientsComponent }, */
  { path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
