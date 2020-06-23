import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';

const routes: Routes = [
    { path: '', component: MainpageComponent},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'createProject', component: CreateProjectComponent},
    
    { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    RegisterComponent,
    ProfileComponent,
    ProjectsComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
