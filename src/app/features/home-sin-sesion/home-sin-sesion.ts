import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // 1. Importamos el Router

@Component({
  selector: 'app-home-sin-sesion',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home-sin-sesion.html',
  styleUrl: './home-sin-sesion.css',
})
export class HomeSinSesion {

  private router = inject(Router);
  
  showModal = signal(false);

  openRegister() {
    
    this.showModal.set(false);
    this.router.navigate(['/register']);
  }

  openLogin() {
    this.showModal.set(true);
  }

  closeLogin() {
    this.showModal.set(false);
  }
}