import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

import { CommonModule } from '@angular/common';
import { LoginService } from './shared/services/login.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule, Footer, Header, CommonModule,  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('D2D-PruebaTecnica');
  private loginService = inject(LoginService);
  protected showLogin = this.loginService.showLoginModal;
}

