import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-evento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-evento.html',
  styleUrl: './detalle-evento.css'
})
export class DetalleEventoComponent implements OnInit {
 
  @Input() id?: string; 
  
  evento: any; 

  ngOnInit(): void {
    console.log('ID recibido de la URL:', this.id);
    
    
    this.cargarDatos(this.id);
  }

  cargarDatos(id?: string) {
    
    this.evento = {
      titulo: 'Evento ID ' + id + ': Vision Board 2026',
      host: 'Ana B.',
      hostAvatar: 'https://ui-avatars.com/api/?name=Ana+B',
      banner: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
      fecha: 'Saturday, Feb 7 · 10:00 AM',
      ubicacion: 'Bogotá, Colombia',
      detalles: 'Contenido cargado para el evento ' + id,
      asistentesCount: 52
    };
  }
}