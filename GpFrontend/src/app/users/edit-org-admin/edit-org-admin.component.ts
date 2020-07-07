import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org',
  templateUrl: './edit-org-admin.component.html',
  styleUrls: ['./edit-org-admin.component.css']
})
export class EditOrgAdminComponent implements OnInit {

  title = 'Editar Organização';
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
