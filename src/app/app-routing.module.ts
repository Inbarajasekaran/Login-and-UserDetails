import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'task', component: TaskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'userDetails/:name', component: UserDetailsComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
