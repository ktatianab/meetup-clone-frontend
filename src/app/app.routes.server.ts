import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
  path: 'detalle-evento/:id',
  renderMode: RenderMode.Server
  }
];
