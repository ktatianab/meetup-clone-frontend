import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  

  // --- Datos para los Carruseles ---
  eventos: any[] = [];
  categorias: any[] = [];
  responsiveOptions: any[] = [];
  selectedTab: string = 'saved'; // Estado inicial

eventosGuardados = [
  { title: 'Titulo Evento guardado', date: 'Tue, Feb 3', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=100&h=100' }
];

  ngOnInit() {
    // 1. Configuración de Categorías
    this.categorias = [
      { nombre: 'Viajes y aire libre', emoji: '🌲', colorClass: 'bg-green-400' },
      { nombre: 'Actividades sociales', emoji: '🍕', colorClass: 'bg-orange-400' },
      { nombre: 'Aficiones y pasiones', emoji: '🎨', colorClass: 'bg-cyan-400' },
      { nombre: 'Deportes y fitness', emoji: '⚽', colorClass: 'bg-red-400' },
      { nombre: 'Salud y bienestar', emoji: '🧠', colorClass: 'bg-purple-400' },
      { nombre: 'Tecnología', emoji: '💻', colorClass: 'bg-blue-400' }
    ];

    // 2. Configuración de Eventos (Mock Data)
    this.eventos = [
      {
        id: 1,
        titulo: 'Evento Presencial en Bogotá: Diseña tu visión 2026',
        fecha: 'Sat, Feb 6 • 10:00 AM GMT-5',
        organizador: 'AWS Women Colombia',
        imagen: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600',
        asistentesCount: 52,
        asistentesIconos: [
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
          'https://randomuser.me/api/portraits/women/3.jpg'
        ]
      },
      {
        id: 2,
        titulo: 'Intercambio de Idiomas - Coffee & Talk',
        fecha: 'Sun, Feb 7 • 4:00 PM GMT-5',
        organizador: 'Bogotá Language Club',
        imagen: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600',
        asistentesCount: 124,
        asistentesIconos: [
          'https://randomuser.me/api/portraits/men/4.jpg',
          'https://randomuser.me/api/portraits/women/5.jpg',
          'https://randomuser.me/api/portraits/men/6.jpg'
        ]
      },
      {
        id: 3,
        titulo: 'Taller de UI/UX con Figma para Principiantes',
        fecha: 'Mon, Feb 8 • 6:30 PM GMT-5',
        organizador: 'Designers Latam',
        imagen: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=600',
        asistentesCount: 89,
        asistentesIconos: [
          'https://randomuser.me/api/portraits/women/7.jpg',
          'https://randomuser.me/api/portraits/men/8.jpg',
          'https://randomuser.me/api/portraits/women/9.jpg'
        ]
      },
      {
        id: 4,
        titulo: 'Senderismo: Quebrada La Vieja',
        fecha: 'Sat, Feb 13 • 7:00 AM GMT-5',
        organizador: 'Explora Bogotá',
        imagen: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600',
        asistentesCount: 15,
        asistentesIconos: [
          'https://randomuser.me/api/portraits/men/10.jpg',
          'https://randomuser.me/api/portraits/women/11.jpg'
        ]
      }
    ];

    // 3. Opciones Responsivas (Breakpoints de Tailwind)
    this.responsiveOptions = [
      {
        breakpoint: '1280px', // xl
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '1024px', // lg
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '640px', // sm
        numVisible: 1,
        numScroll: 1
      }
    ];
  }


  verDetalleEvento(id: number) {
    
    
  }
}
