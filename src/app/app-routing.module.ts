import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    { path : 'home', component: HomeComponent},
    { path : 'signup', component: SignupComponent},
    { path : 'projects', component: ProjectsComponent},
    { path : 'services', component: ServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
