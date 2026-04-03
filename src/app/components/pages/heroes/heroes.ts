import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css']
})
export class HeroGalleryComponent {
  // Define roles for the filter buttons
  roles = ['All', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];
  
  heroes = [
    { name: 'Miya', role: 'Marksman', image: 'MIYA.jpg' },
    { name: 'Gusion', role: 'Assassin / Mage', image: 'assets/heroes/gusion.jpg' },
    { name: 'Tigreal', role: 'Tank / Support', image: 'assets/heroes/tigreal.jpg' },
    { name: 'Balmond', role: 'Fighter', image: 'assets/heroes/balmond.jpg' },
    { name: 'Eudora', role: 'Mage', image: 'assets/heroes/eudora.jpg' },
    { name: 'Zilong', role: 'Fighter / Assassin', image: 'assets/heroes/zilong.jpg' },
    { name: 'Layla', role: 'Marksman', image: 'assets/heroes/layla.jpg' },
    { name: 'Nana', role: 'Mage / Support', image: 'assets/heroes/nana.jpg' },
    { name: 'Saber', role: 'Assassin', image: 'assets/heroes/saber.jpg' },
    { name: 'Alucard', role: 'Fighter / Assassin', image: 'assets/heroes/alucard.jpg' }
  ];
  heroSlots = Array(10).fill({});
}