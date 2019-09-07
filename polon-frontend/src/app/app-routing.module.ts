import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AuthGaurdService } from './auth-guard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate:[AuthGaurdService]},
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent, canActivate:[AuthGaurdService] },
  { path: 'userslist', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
