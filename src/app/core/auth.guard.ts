import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service'; // Ajusta la ruta a tu servicio

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Si tiene token, déjalo pasar
  if (authService.isAuthenticated()) {
    return true;
  }

  // Si no, mándalo al login
  router.navigate(['/login']);
  return false;
};