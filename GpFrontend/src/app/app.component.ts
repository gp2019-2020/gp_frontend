import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  page_name = 'Somos Voluntários';
  login = 'Login';
  register = 'Registo';
  profile = 'Perfil'

}
