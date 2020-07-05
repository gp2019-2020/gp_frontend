import { Component, OnInit} from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  entities = [
    { id: 1, firstname: 'João', lastname: "José", company: "Enlatados Setubalenses LDA", nif: "124578965", email: "company1@hotmail.com" },
    { id: 2, firstname: 'Zé', lastname: "António", company: "", nif: "", email: "zeantonio@hotmail.com" },
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
    if(confirm("Têm a certeza que quer eleminar "+name)) {
      alert("Eliminado!")
    }
  }

  editUser(id: string){
    alert("Going to Edit User");
  }
}
