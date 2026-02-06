import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private loginService = inject(LoginService);
  showLogin = this.loginService.showLoginModal;

  toggleLogin() {
    this.loginService.toggleLogin();
  }
}
