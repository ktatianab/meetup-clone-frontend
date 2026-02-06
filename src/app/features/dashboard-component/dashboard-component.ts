import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent implements OnInit {
  private router = inject(Router);

  userData: any = null;
  tokenAbbreviated: string = '';

  ngOnInit() {
    // Obtener token del localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Mostrar solo los primeros y últimos caracteres
      this.tokenAbbreviated = token.substring(0, 10) + '...' + token.substring(token.length - 10);
    }

    // Datos simulados del usuario
    this.userData = {
      name: 'Karen Bravo',
      role: 'Administrador'
    };
  }

  logout() {
    // Eliminar token y redirigir al login
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
