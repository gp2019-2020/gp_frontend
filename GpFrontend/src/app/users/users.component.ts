import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getUsers() {
    var req = new XMLHttpRequest();
    req.open("GET", "/api/projects/");
    req.addEventListener("load", function() {
        var projects = JSON.parse(this.responseText);
        console.log(projects);
        var tb = document.getElementById('projects');
        console.log(tb)
        tb.innerHTML = '';
        for (var i in projects) {
            var tr = document.createElement('tr');

            var tdTitle = document.createElement('td');
            var tdCreated = document.createElement('td');
            var tdUpdated = document.createElement('td');
            var tdButtonProjectActions = document.createElement('td');
            var tdButtonTasksView = document.createElement('td');
            
            tdTitle.innerHTML = "<input type='text' class='form-control' id='"+projects[i].id+"Title' name='title' placeholder='"+projects[i].title+"'>";
            tdCreated.innerHTML = projects[i].creation_date;
            tdUpdated.innerHTML = projects[i].last_updated;
            tdButtonProjectActions.innerHTML = 
                "<div class='btn-group' role='group' aria-label='Basic example'>"+
                    "<button type='button' type='submit' onclick='updateProject(" + projects[i].id +  ")' class='btn btn-outline-success'>Update</button>"+
                    "<button type='button' type='submit' onclick='deleteProject(" + projects[i].id +  ")' class='btn btn-outline-danger'>Delete</button>"+
                "</div>";
            tdButtonTasksView.innerHTML =
                "<button type='button' class='btn btn-info' onclick='getTasks(" + projects[i].id +  ")'  data-toggle='modal' data-target='#ModalCenter'>"+
                    "Ver Taregas"+
                "</button>";
            
            tr.appendChild(tdTitle);
            tr.appendChild(tdCreated);
            tr.appendChild(tdUpdated);
            tr.appendChild(tdButtonProjectActions);
            tr.appendChild(tdButtonTasksView);

            tb.appendChild(tr);
        }
    });
    req.send();
  }

}
