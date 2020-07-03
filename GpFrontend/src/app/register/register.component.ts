import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  title = 'Registar Conta'
  firstName = 'Primeiro Nome'
  lastName = 'Último Nome'
  email = 'Email'
  password = 'Palavra Pass'
  company = 'Empresa'
  nif = 'NIF'
  
  constructor() {

   }

   teste() {
    alert("De");
   }

  ngOnInit(): void {
    
  }

}
