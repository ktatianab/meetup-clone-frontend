import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // RouterLink no es necesario si usas navegación programática
import { LoginService } from '../services/login.service';
import { AuthService } from '../../core/auth.service'; // Asegúrate que la ruta sea correcta

@Component({
  selector: 'app-login',
  standalone: true, // Agregado explícitamente por buenas prácticas
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  host: { 'class': 'block w-full' }
})
export class Login {
  // Inyecciones de dependencias
  private router = inject(Router);
  private loginService = inject(LoginService);
  private authService = inject(AuthService); // Inyectamos el servicio de Auth

  // Signals o variables reactivas del servicio de UI
  showLogin = this.loginService.showLoginModal;
  
  // Variables del formulario
  showPassword = false;
  isRobotChecked = false;
  email = '';
  password = '';
  
  // Variables de registro
  isRegistering = false;
  registerPassword = '';
  confirmPassword = '';

  // --- Lógica Visual ---

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  isLoginEnabled() {
    return this.isRobotChecked && this.email.trim() !== '' && this.password.trim() !== '';
  }

  isRegisterEnabled() {
    return this.email.trim() !== '' && this.registerPassword.trim() !== '' && 
           this.confirmPassword.trim() !== '' && this.registerPassword === this.confirmPassword;
  }

  toggleRegister() {
    this.isRegistering = !this.isRegistering;
    this.resetForm(); // Buena práctica: limpiar formulario al cambiar
  }

  // --- Lógica de Negocio ---

  login() {
    // 1. Validamos usando tu función auxiliar
    if (!this.isLoginEnabled()) {
      alert('Por favor completa todos los campos y verifica que no eres un robot');
      return;
    }

    // 2. Delegamos la autenticación al servicio (Esto evita errores de SSR y localStorage)
    // El servicio se encarga de guardar el token y redirigir
    this.authService.login();

    // 3. Cerramos el modal visualmente
    this.loginService.closeLogin();
  }

  register() {
    // Validaciones básicas
    if (!this.isRegisterEnabled()) {
      alert('Por favor revisa los campos');
      return;
    }

    if (this.registerPassword.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    // Simulamos registro
    alert('¡Registro exitoso! Ahora inicia sesión.');
    
    // Volvemos a la vista de login
    this.toggleRegister();
  }

  // --- Navegación y Cierre ---

  closeModal() {
    this.loginService.closeLogin();
  }

  goToRegister() {
    this.loginService.closeLogin();
    this.router.navigate(['/register']);
  }

  // Función auxiliar para limpiar campos
  private resetForm() {
    this.email = '';
    this.password = '';
    this.registerPassword = '';
    this.confirmPassword = '';
    this.isRobotChecked = false;
  }
}