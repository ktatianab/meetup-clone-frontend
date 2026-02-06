import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service'; 

@Component({
  selector: 'app-menu-desplegable',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-desplegable.html',
})
export class MenuDesplegable {
  // 1. Inyectamos el servicio de autenticación
  public authService = inject(AuthService); 
  
  menuAbierto = signal(false);

  toggleMenu() {
    this.menuAbierto.update(v => !v);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }

  logout() {
    this.authService.logout();
    this.cerrarMenu();
  }
}