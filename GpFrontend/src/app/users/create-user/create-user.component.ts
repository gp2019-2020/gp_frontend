import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  title = 'Registar Conta'
  firstName = 'Primeiro Nome'
  lastName = 'Último Nome'
  email = 'Email'
  password = 'Palavra Pass'
  company = 'Empresa'
  nif = 'NIF'

  constructor() { }

  ngOnInit(): void {
  }

  createUser(){
    alert("Inserted User");
    document.location.href = '/users';
  }

}
