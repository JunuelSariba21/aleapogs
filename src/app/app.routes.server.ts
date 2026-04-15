import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'heroes/:name',
    renderMode: RenderMode.Client
  },
  {
    path: 'items',
    renderMode: RenderMode.Client
  },
  {
    path: 'items/:name',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];