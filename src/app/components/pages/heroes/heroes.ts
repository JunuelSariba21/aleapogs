import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroService, Hero } from '../../../services/hero.service';

@Component({
  selector: 'app-hero-gallery',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './heroes.html',
  styleUrls: ['./heroes.css']
})
export class HeroGalleryComponent implements OnInit {
  // Signals for reactive state
  allHeroes = signal<Hero[]>([]);
  searchQuery = signal('');
  selectedRole = signal('All');

  roles = ['All', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];

  // Automatically re-calculates when search or role changes
  filteredHeroes = computed(() => {
    return this.allHeroes().filter(hero => {
      const matchesSearch = hero.name.toLowerCase().includes(this.searchQuery().toLowerCase());
      const matchesRole = this.selectedRole() === 'All' || 
                         hero.role.toLowerCase().includes(this.selectedRole().toLowerCase());
      return matchesSearch && matchesRole;
    });
  });

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeroes().subscribe({
      next: (data) => this.allHeroes.set(data),
      error: (err) => console.error('Failed to load heroes', err)
    });
  }

  setRole(role: string) {
    this.selectedRole.set(role);
  }
}