// detalle-evento/evento.model.ts
export interface Evento {
  id: number;
  titulo: string;
  host: string;
  hostAvatar: string;
  organizador?: string;
  organizadorLogo?: string;
  banner: string;
  fecha: string;
  ubicacion: string;
  detalles: string;
  asistentesCount: number;
}