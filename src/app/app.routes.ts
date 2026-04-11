import { Routes } from '@angular/router';
import { LandingComponent } from './components/pages/landing/landing';
import { HomeComponent } from './components/pages/home/home';
import { LoginComponent } from './components/pages/register/register';
import { AboutComponent } from './components/pages/about/about';
import { HeroGalleryComponent } from './components/pages/heroes/heroes';
import { HeroRolesComponent } from './components/pages/roles/roles';
import { HeroDetailComponents } from './components/pages/hero-detail/hero-detail';
import { ItemsComponent } from './components/pages/items/items';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'register', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroGalleryComponent },
  { path: 'heroes/:name', component: HeroDetailComponents },
  { path: 'roles', component: HeroRolesComponent}
];