import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';

//#region Funções de JS
declare function getProjects(): any;
declare function loginMenuManager(): any;
//#endregion

@Component({
  selector: 'app-viewprojects',
  templateUrl: './viewprojects.component.html',
  styleUrls: ['./viewprojects.component.css']
})
export class ViewprojectsComponent implements OnInit {

  constructor() { }

  controls: FormArray;

  ngOnInit() {
    loginMenuManager();
    getProjects();
  }

}
