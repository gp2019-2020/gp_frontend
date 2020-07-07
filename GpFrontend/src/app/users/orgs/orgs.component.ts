import { Component, OnInit} from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-orgs',
  templateUrl: './orgs.component.html',
  styleUrls: ['./orgs.component.css']
})

export class OrgsComponent implements OnInit {

  entities = [
    { id: 3, firstname: 'Pancrácio', lastname: "Josefino", company: "Enlatados Setubalenses LDA", nif: "457815974", email: "company1@hotmail.com" },
    { id: 4, firstname: 'Anita', lastname: "Sousa", company: "Entalados Setubalenses LDA", nif: "455458645", email: "zeantonio@hotmail.com" },
  ]

  controls: FormArray;

  ngOnInit() {
    const toGroups = this.entities.map(entity => {
      return new FormGroup({
        id: new FormControl(entity.id),
        firstname: new FormControl(entity.firstname, Validators.required),
        lastname: new FormControl(entity.lastname),
        company: new FormControl(entity.company),
        nif: new FormControl(entity.nif),
        email: new FormControl(entity.email, Validators.required),
      });
    });
    this.controls = new FormArray(toGroups);
  }

  deleteUser(name: string) {
    if(confirm("Têm a certeza que quer eliminar "+ name + "?")) {
      alert("Eliminado!")
    }
  }

  editUser(id: string){
    //alert("Going to Edit User");
    this.Redirect();
  }

  Redirect() {
    document.location.href = '/edit-org-admin';
 }
}
