import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID); // Para saber si estamos en el navegador

  // 1. Simula el Login: Guarda un token falso en el LS
  login() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', 'mi-jwt-falso-123456');
      this.router.navigate(['/dashboard']);
    }
  }

  // 2. Logout: Borra el token y te manda al home/login
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }

  // 3. Verifica si está logueado (si hay token)
  isAuthenticated(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token'); // Devuelve true si existe
    }
    return false;
  }
}