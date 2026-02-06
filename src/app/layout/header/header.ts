import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { signal } from '@angular/core';
import { MenuDesplegable } from '../../shared/menu-desplegable/menu-desplegable';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MenuDesplegable],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private loginService = inject(LoginService);
  showLogin = this.loginService.showLoginModal;

  toggleLogin() {
    this.loginService.toggleLogin();
  }
  
  public authService = inject(AuthService);

  // Signal para controlar la visibilidad
  menuAbierto = signal(false);

  toggleMenu() {
    this.menuAbierto.update(v => !v);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }
}

