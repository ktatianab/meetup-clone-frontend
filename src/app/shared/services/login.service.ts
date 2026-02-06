import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  showLoginModal = signal(false);

  // Signal and helpers for the register modal
  showRegisterModal = signal(false);

  openRegister() {
    this.showRegisterModal.set(true);
  }

  closeRegister() {
    this.showRegisterModal.set(false);
  }

  toggleRegister() {
    this.showRegisterModal.set(!this.showRegisterModal());
  }

  openLogin() {
    this.showLoginModal.set(true);
  }

  closeLogin() {
    this.showLoginModal.set(false);
  }

  toggleLogin() {
    this.showLoginModal.set(!this.showLoginModal());
  }
}
