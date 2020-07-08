import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//#region Funções de JS
declare function loginMenuManager(): any;
declare function logout(): any;
//#endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  page_name = 'Somos Voluntários';
  login = 'Login';
  register = 'Registo';
  register_org = 'Organizações';
  profile = 'Perfil';


  ngOnInit(): void {
    loginMenuManager();
  }

  userLogoutModule(){
    logout();
  }
}
