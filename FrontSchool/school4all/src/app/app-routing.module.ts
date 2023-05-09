import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {path: 'home', loadComponent:() =>import('./home/home.component').then(m=>m.HomeComponent)
 
},
{path:'new-student&prof' , loadComponent: ()=>import('./new-user/new-user.component').then(m=>m.NewUserComponent)}
];

export const AppRoutingModule = [provideRouter(routes), provideHttpClient()];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
