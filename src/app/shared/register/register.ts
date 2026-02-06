import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
  host: { 'class': 'block w-full' }
})
export class Register {
  private loginService = inject(LoginService);
  private router = inject(Router);
  
  showModal = signal(false);

  closeModal() {
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.showModal.set(false);
    this.router.navigate(['/login']);
  }
}
