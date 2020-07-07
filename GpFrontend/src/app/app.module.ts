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
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { ViewprojectsComponent } from './viewprojects/viewprojects.component';



import { ThemeModule } from './theme/theme.module';
import { lightTheme } from './theme/light-theme';
import { darkTheme } from './theme/dark-theme';

const routes: Routes = [
    { path: '', component: MainpageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'register_org', component: RegisterOrgComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'createProject', component: CreateProjectComponent},
    { path: 'users', component: UsersComponent},
    { path: 'createUser', component: CreateUserComponent},
    { path: 'viewprojects', component: ViewprojectsComponent},
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
    ProjectsComponent,
    CreateProjectComponent,
    UsersComponent,
    CreateUserComponent,
    ViewprojectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: 'light'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
