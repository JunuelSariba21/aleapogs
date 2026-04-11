import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'heroes/:name',
    renderMode: RenderMode.Client // This tells Angular NOT to prerender this route
  },
  {
    path: 'items/:name',
    renderMode: RenderMode.Client // Do the same for items to avoid the next error
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];