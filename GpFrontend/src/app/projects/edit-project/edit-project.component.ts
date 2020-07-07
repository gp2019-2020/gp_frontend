import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editProject(){
    //alert("Inserted Project");
    document.location.href = '/projects'
  }

}
