import { Component, OnInit } from '@angular/core';

////#region
declare function loadMe(page) : any;
declare function userEdit() : any;
////#endregion
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Editar Perfil';
  firstName = 'Primeiro Nome';
  lastName = 'Último Nome';
  email = 'Email';
  password = 'Palavra Pass';
  company = 'Empresa';
  nif = 'NIF';

  constructor() { }

  ngOnInit(): void {
    loadMe("myProfile");
  }

  testAlert(){
    const conf = confirm('Ao aceitar remover os seus dados, o utilizador está a \nconfirmar que a sua conta e projetos de voluntariado \nem que contribuiu serão eliminados. \n\nPretende continuar?');
    if( conf == true ){
      console.log('Pressed OK');
    }else{
      console.log('Pressed Cancel');
    }
  }

  userEditModule(){
    userEdit();
  }
}
