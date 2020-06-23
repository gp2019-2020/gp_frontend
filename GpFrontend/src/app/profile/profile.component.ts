import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Editar Perfil'
  firstName = 'Primeiro Nome'
  lastName = 'Último Nome'
  email = 'Email'
  password = 'Palavra Pass'
  company = 'Empresa'
  nif = 'NIF'

  constructor() { }

  ngOnInit(): void {
  }

}
