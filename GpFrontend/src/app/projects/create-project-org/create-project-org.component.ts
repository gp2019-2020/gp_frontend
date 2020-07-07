import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project-org',
  templateUrl: './create-project-org.component.html',
  styleUrls: ['./create-project-org.component.css']
})
export class CreateProjectOrgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createProject(){
    alert("Inserted Project");
    document.location.href = '/projects';
  }

}
