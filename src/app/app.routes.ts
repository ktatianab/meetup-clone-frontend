import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { DetalleEvento } from './features/detalle-evento/detalle-evento';
import { Perfil } from './features/perfil/perfil';
import { Login } from './shared/login/login';
import { Register } from './shared/register/register';
import { DashboardComponent } from './features/dashboard-component/dashboard-component';
import { HomeSinSesion } from './features/home-sin-sesion/home-sin-sesion';

import { AuthService } from './core/auth.service';
import { authGuard } from './core/auth.guard';




export const routes: Routes = [
  { path: '', component: HomeSinSesion, pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { 
    path: 'dashboard', 
    component: Home, 
    canActivate: [authGuard]
  },
  { path: 'home', component: HomeSinSesion },
  { path: 'detalle-evento', component: DetalleEvento },
  { path: 'perfil', component: Perfil, canActivate: [authGuard] },
];
