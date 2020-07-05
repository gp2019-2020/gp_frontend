import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  constructor() { }

  entities = [
    { id: 1, name: 'Projecto de voluntariado - Eusouvoluntario', user: "António", datebegin: "10/07/2020", 
        dateend: "10/07/2020", hourbegin: "17:00", hourend: "18:00",
        local: "Setúbal", state: "Não aprovado"},
    { id: 2, name: 'Limpeza das praias', user: "José", datebegin: "20/06/2020", 
    dateend: "20/06/2020", hourbegin: "08:00", hourend: "18:00",
    local: "Costa da Capariga", state: "Aguardar aprovação"},
  ]

  controls: FormArray;

  ngOnInit() {
    const toGroups = this.entities.map(entity => {
      return new FormGroup({
        id: new FormControl(entity.id),
        name: new FormControl(entity.name, Validators.required),
        user: new FormControl(entity.user, Validators.required),
        datebegin: new FormControl(entity.datebegin),
        dateend: new FormControl(entity.dateend),
        hourbegin: new FormControl(entity.hourbegin),
        hourend: new FormControl(entity.hourend, Validators.required),
        local: new FormControl(entity.local, Validators.required),
        state: new FormControl(entity.state, Validators.required),
      });
    });
    this.controls = new FormArray(toGroups);
  }

  deleteProject(name: string) {
    if(confirm("Têm a certeza que quer eleminar  "+name)) {
      alert("Eliminado!")
    }
  }

  editProject(name: string){
    alert("Going to Edit Project");
  }
}
