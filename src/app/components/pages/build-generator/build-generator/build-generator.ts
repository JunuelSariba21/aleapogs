import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-build-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './build-generator.html',
  styleUrl: './build-generator.css'
})
export class BuildGeneratorComponent {
  selectedHero = signal('Alucard');
  enemyType = signal('Tank');
  matchPhase = signal('Late Game');

  heroes = ['Alucard', 'Miya', 'Eudora', 'Tigreal', 'Lancelot'];
  enemies = ['Tank', 'Mage', 'Marksman', 'Assassin', 'Fighter'];
  phases = ['Early Game', 'Mid Game', 'Late Game'];

  recommendedBuild = computed(() => {
    const hero = this.selectedHero();
    const enemy = this.enemyType();
    const phase = this.matchPhase();

    if (hero === 'Alucard' && enemy === 'Tank') {
      return ['Hunter Strike', 'Malefic Roar', 'Blade of Despair', 'Queen\'s Wings'];
    }

    if (hero === 'Miya' && phase === 'Late Game') {
      return ['Berserker\'s Fury', 'Scarlet Phantom', 'Windtalker', 'Malefic Gun'];
    }

    return ['Boots', 'Blade of Despair', 'Immortality', 'Athena Shield'];
  });
}