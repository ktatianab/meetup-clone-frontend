import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel'; 
import { DataViewModule } from 'primeng/dataview';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-sin-sesion',
  standalone: true,
  imports: [CommonModule, CarouselModule, DataViewModule],
  templateUrl: './home-sin-sesion.html',
  styleUrl: './home-sin-sesion.css',
})
export class HomeSinSesion implements OnInit {
  // Estado para el modal
  showModal = signal(false);
  
  // Inyección de servicios
  private router = inject(Router);

  // Arrays de datos
  eventos: any[] = [];
  categorias: any[] = [];
  responsiveOptions: any[] = [];

  ngOnInit() {
    // 1. Configuración de Categorías (para el p-carousel)
    this.categorias = [
      { nombre: 'Viajes y aire libre', emoji: '🌲', colorClass: 'bg-green-400' },
      { nombre: 'Actividades sociales', emoji: '🍕', colorClass: 'bg-orange-400' },
      { nombre: 'Aficiones y pasiones', emoji: '🎨', colorClass: 'bg-cyan-400' },
      { nombre: 'Deportes y fitness', emoji: '⚽', colorClass: 'bg-red-400' },
      { nombre: 'Salud y bienestar', emoji: '🧠', colorClass: 'bg-purple-400' }
    ];

    // 2. Configuración de Eventos (para el p-dataView)
    // Creamos un objeto base para repetir los datos y llenar el grid
    const eventoMock = {
      titulo: 'Community Language Exchange Saturdays - English / Spanish /...',
      fecha: '07 FEB 2026 15:00 GMT-5',
      organizador: 'Community Language Exchange Bogot...',
      precio: 'GRATIS',
      imagen: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500',
      asistentesCount: 8,
      asistentesIconos: [
        'https://i.pravatar.cc/100?u=1', 
        'https://i.pravatar.cc/100?u=2', 
        'https://i.pravatar.cc/100?u=3'
      ]
    };

    // Generamos 8 eventos para que se vean dos filas de 4 en pantallas grandes
    this.eventos = Array(8).fill(null).map((_, i) => ({
      ...eventoMock,
      id: i // Un ID único opcional
    }));

    // 3. Opciones de respuesta para el carrusel
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  // Métodos de navegación y modales
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