import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-org',
  templateUrl: './profile_org.component.html',
  styleUrls: ['./profile_org.component.css']
})
export class ProfileOrgComponent implements OnInit {

  title = 'Editar Perfil';
  firstName = 'Primeiro Nome';
  lastName = 'Último Nome';
  email = 'Email';
  password = 'Palavra Pass';
  company = 'Empresa';
  nif = 'NIF';

  constructor() { }

  ngOnInit(): void {
  }

  testAlert(){
    const conf = confirm('Ao aceitar remover os seus dados, o utilizador está a \nconfirmar que a sua conta e projetos de voluntariado \nem que contribuiu serão eliminados. \n\nPretende continuar?');
    if( conf == true ){
      console.log('Pressed OK');
    }else{
      console.log('Pressed Cancel');
    }
  }
}
