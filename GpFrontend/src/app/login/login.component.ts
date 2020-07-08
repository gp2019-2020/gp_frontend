import { Component, OnInit } from '@angular/core';

//#region Funções de JS
declare function userLogin(): any;
declare function loginMenuManager(): any;
//#endregion
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'Email';
  password = 'Palavra Pass';

  constructor() { }

  ngOnInit(): void {
    loginMenuManager();
  }

  userLoginModule(){
    userLogin();
  }

}
