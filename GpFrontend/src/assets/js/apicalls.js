function userLogin(){

  console.log(document.getElementById("email").value);
  console.log(document.getElementById("password").value);

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "http://34.89.108.223/users/login");
  xmlhttp.addEventListener("load", function() {
      console.log("RAN RESPONSE");
      try{
        var user = JSON.parse(this.responseText);
        console.log(user);
        sessionStorage.setItem("firstName", user.msg.firstname);
        sessionStorage.setItem("lastName", user.msg.lastname);
        sessionStorage.setItem("id", user.msg.id);
        sessionStorage.setItem("email", user.msg.email);
        sessionStorage.setItem("password", user.msg.password);
        sessionStorage.setItem("token", user.token);
        if(user.msg.usertype.graduate == true ||
           user.msg.usertype.retired == true ||
           user.msg.usertype.scholarship == true ||
           user.msg.usertype.student == true ||
           user.msg.usertype.teaching == true){
          sessionStorage.setItem("usertype", "IPS");
        }else if (user.msg.usertype.outsider == true){
          sessionStorage.setItem("usertype", "guest");
        }else if (user.msg.usertype.admin == true){
          sessionStorage.setItem("usertype", "admin");
        }
        window.location.href = "/";
    }catch(e){
        console.log(e)
        sessionStorage.setItem("firstName", "");
        sessionStorage.setItem("lastName", "");
        sessionStorage.setItem("id", "");
        sessionStorage.setItem("password", "");
        sessionStorage.setItem("email", "");
        sessionStorage.setItem("token", "");
        sessionStorage.setItem("usertype", "");
        window.location.href = "/";
    }
  });

  xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
  xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({
      "email": document.getElementById("email").value,
      "password" : document.getElementById("password").value
  }));

}

function loginMenuManager(){
  if (sessionStorage.getItem("usertype") == "IPS" ) {
    document.getElementById("viewprojects").style.display = 'block';
    document.getElementById("createProject").style.display = 'block';
    document.getElementById("statistics").style.display = 'block';
    document.getElementById("others").style.display = 'block';
    document.getElementById("profile").style.display = 'inline';
    document.getElementById("logout").style.display = 'inline';

    document.getElementById("createProjectOrg").style.display = 'none';
    document.getElementById("users").style.display = 'none';
    document.getElementById("orgs").style.display = 'none';
    document.getElementById("projects").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("register_org").style.display = 'none';
    document.getElementById("login").style.display = 'none';
  }else if (sessionStorage.getItem("usertype") == "guest"){
    document.getElementById("viewprojects").style.display = 'block';
    document.getElementById("statistics").style.display = 'block';
    document.getElementById("others").style.display = 'block';
    document.getElementById("profile").style.display = 'inline';
    document.getElementById("logout").style.display = 'inline';

    document.getElementById("createProject").style.display = 'none';
    document.getElementById("createProjectOrg").style.display = 'none';
    document.getElementById("users").style.display = 'none';
    document.getElementById("orgs").style.display = 'none';
    document.getElementById("projects").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("register_org").style.display = 'none';
    document.getElementById("login").style.display = 'none';
  }else if (sessionStorage.getItem("usertype") == "company"){
    document.getElementById("viewprojects").style.display = 'block';
    document.getElementById("createProjectOrg").style.display = 'inline';
    document.getElementById("statistics").style.display = 'block';
    document.getElementById("others").style.display = 'block';
    document.getElementById("profile").style.display = 'inline';
    document.getElementById("logout").style.display = 'inline';

    document.getElementById("createProject").style.display = 'none';
    document.getElementById("users").style.display = 'none';
    document.getElementById("orgs").style.display = 'none';
    document.getElementById("projects").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("register_org").style.display = 'none';
    document.getElementById("login").style.display = 'none';
  }else if (sessionStorage.getItem("usertype") == "admin"){
    document.getElementById("viewprojects").style.display = 'block';
    document.getElementById("createProject").style.display = 'block';
    document.getElementById("statistics").style.display = 'block';
    document.getElementById("users").style.display = 'block';
    document.getElementById("orgs").style.display = 'block';
    document.getElementById("projects").style.display = 'block';
    document.getElementById("others").style.display = 'block';
    document.getElementById("profile").style.display = 'inline';
    document.getElementById("logout").style.display = 'inline';

    document.getElementById("createProjectOrg").style.display = 'none';
    document.getElementById("register").style.display = 'none';
    document.getElementById("register_org").style.display = 'none';
    document.getElementById("login").style.display = 'none';
  }else{
    document.getElementById("viewprojects").style.display = 'block';
    document.getElementById("statistics").style.display = 'block';
    document.getElementById("others").style.display = 'block';
    document.getElementById("register").style.display = 'inline';
    document.getElementById("register_org").style.display = 'inline';
    document.getElementById("login").style.display = 'inline';

    document.getElementById("createProject").style.display = 'none';
    document.getElementById("createProjectOrg").style.display = 'none';
    document.getElementById("users").style.display = 'none';
    document.getElementById("orgs").style.display = 'none';
    document.getElementById("projects").style.display = 'none';
    document.getElementById("profile").style.display = 'none';
    document.getElementById("logout").style.display = 'none';
  }

  console.log(sessionStorage.getItem("username"))
}

function logout(){
  sessionStorage.setItem("firstName", "");
  sessionStorage.setItem("lastName", "");
  sessionStorage.setItem("id", "");
  sessionStorage.setItem("email", "");
  sessionStorage.setItem("password", "");
  sessionStorage.setItem("token", "");
  sessionStorage.setItem("usertype", "");
  window.location.href = "/";
}

function userEdit(){

  //#region Session storage sets
  sessionStorage.setItem("firstName", document.getElementById("firstName").value);
  sessionStorage.setItem("lastName", document.getElementById("lastName").value);
  sessionStorage.setItem("email", document.getElementById("email").value);
  sessionStorage.setItem("password", document.getElementById("password").value);
  //#endregion

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("PUT", "http://34.89.108.223/users/" + sessionStorage.getItem("id"));
  xmlhttp.addEventListener("load", function() {
      console.log("RAN RESPONSE");
      loginMenuManager();
      location.reload();
  });
  xmlhttp.setRequestHeader('Authorization', 'Bearer ' + sessionStorage.getItem("token"));
  xmlhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
  xmlhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({
      "firstname": document.getElementById("firstName").value,
      "lastname": document.getElementById("lastName").value,
      "email" : document.getElementById("email").value,
      "password" : document.getElementById("password").value,
      "id" : sessionStorage.getItem("id").value
  }));
}

function loadMe(page){
  if(page == "myProfile"){
    document.getElementById("firstName").value = sessionStorage.getItem("firstName");
    document.getElementById("lastName").value = sessionStorage.getItem("lastName");
    document.getElementById("email").value = sessionStorage.getItem("email");
    document.getElementById("password").value = sessionStorage.getItem("password");
  }
}


function getProjects() {

  var req = new XMLHttpRequest();
  req.open("GET", "http://34.89.108.223/projects/" + sessionStorage.getItem("id"));
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
          var tdWorkHours = document.createElement('td');
          var tdLocal = document.createElement('td');
          var tdDescription = document.createElement('td');
          var tdState = document.createElement('td');
          var tdButtonApplyToProject = document.createElement('td');

          tdTitle.innerHTML = projects[i].title;
          tdCreated.innerHTML = projects[i].createdAt;
          tdWorkHours.innerHTML = projects[i].hours_per_day;
          tdLocal.innerHTML = projects[i].location;
          tdDescription.innerHTML = projects[i].project_description;
          tdState.innerHTML = projects[i].students;
          tdButtonApplyToProject.innerHTML =
              "<button type='button' class='btn btn-info' (click)='applyToProject(" + projects[i].id +  ")'"+
                  "Candidatar" +
              "</button>";

          tr.appendChild(tdTitle);
          tr.appendChild(tdCreated);
          tr.appendChild(tdWorkHours);
          tr.appendChild(tdLocal);
          tr.appendChild(tdDescription);
          tr.appendChild(tdState);
          tr.appendChild(tdButtonApplyToProject);
          tb.appendChild(tr);
      }
  });
  req.send();
}
