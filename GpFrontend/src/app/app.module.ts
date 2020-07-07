
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { RegisterOrgComponent } from './register_org/register_org.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileOrgComponent } from './profile_org/profile_org.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { CreateOrgComponent } from './users/create-org/create-org.component';
import { UsersComponent } from './users/users.component';
import { OrgsComponent } from './users/orgs/orgs.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ViewprojectsComponent } from './viewprojects/viewprojects.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { EditProfileAdminComponent } from './users/edit-profile-admin/edit-profile-admin.component';
import { CreateProjectOrgComponent } from './projects/create-project-org/create-project-org.component';
import {EditOrgAdminComponent} from './users/edit-org-admin/edit-org-admin.component';

const routes: Routes = [
    { path: '', component: MainpageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'register_org', component: RegisterOrgComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'profile_org', component: ProfileOrgComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'createProject', component: CreateProjectComponent},
    { path: 'createProjectOrg', component: CreateProjectOrgComponent},
    { path: 'createOrg', component: CreateOrgComponent},
    { path: 'users', component: UsersComponent},
    { path: 'orgs', component: OrgsComponent},
    { path: 'createUser', component: CreateUserComponent},
    { path: 'viewprojects', component: ViewprojectsComponent},
    { path: 'edit-project', component: EditProjectComponent},
    { path: 'edit-profile-admin', component: EditProfileAdminComponent},
    { path: 'edit-org-admin', component: EditOrgAdminComponent},
    { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    RegisterComponent,
    RegisterOrgComponent,
    ProfileComponent,
    ProfileOrgComponent,
    ProjectsComponent,
    CreateProjectComponent,
    CreateOrgComponent,
    UsersComponent,
    OrgsComponent,
    CreateUserComponent,
    ViewprojectsComponent,
    EditProjectComponent,
    EditProfileAdminComponent,
    EditOrgAdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
