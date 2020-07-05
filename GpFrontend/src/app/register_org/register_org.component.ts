import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register_org.component.html',
  styleUrls: ['./register_org.component.css']
})

export class RegisterOrgComponent implements OnInit {

  title = 'Registar Conta';
  firstName = 'Primeiro Nome';
  lastName = 'Último Nome';
  userName = 'Nome de Utilizador';
  email = 'Email';
  password = 'Palavra Pass';
  company = 'Empresa';
  nif = 'NIF';
  constructor() { }

  ngOnInit(): void {
  }

}
