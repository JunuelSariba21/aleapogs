import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-hero-roles',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roles.html',
  styleUrls: ['./roles.css']
})
export class HeroRolesComponent {
  roles = [
    {
      title: 'Tank',
      subtitle: 'INITIATOR & MEATSHIELD',
      icon: '🛡️',
      desc: 'The frontline of the team. Tanks soak up massive amounts of damage and initiate team fights to create space for allies.',
      stats: ['HP & Durability', 'Physical Defense', 'CC Duration']
    },
    {
      title: 'Fighter',
      subtitle: 'BRAWLER & OFFLANER',
      icon: '⚔️',
      desc: 'Versatile heroes who balance offense and defense. Usually dominate the EXP lane and excel in sustained duels.',
      stats: ['Physical ATK', 'Spell Vamp', 'Hybrid DEF']
    },
    {
      title: 'Assassin',
      subtitle: 'BURST & MOBILITY',
      icon: '🗡️',
      desc: 'High-risk, high-reward specialists. They target vulnerable enemies (Mages/Marksmen) and escape before being caught.',
      stats: ['Physical PEN', 'Crit Chance', 'Burst Damage']
    },
    {
      title: 'Mage',
      subtitle: 'MAGIC DPS & CC',
      icon: '🪄',
      desc: 'Control the battlefield with powerful spells and area-of-effect damage. They usually hold the mid-lane.',
      stats: ['Magic Power', 'Cooldown Reduc.', 'Mana Regen']
    },
    {
      title: 'Marksman',
      subtitle: 'LATE-GAME CARRY',
      icon: '🎯',
      desc: 'Weak early game but scale into unstoppable powerhouses. They provide consistent physical damage from distance.',
      stats: ['Attack Speed', 'Crit Damage', 'Lifesteal']
    },
    {
      title: 'Support',
      subtitle: 'UTILITY & HEALING',
      icon: '🏥',
      desc: 'The backbone of the team. Supports provide healing, buffs, and utility to keep allies alive and amplify their performance.',
      stats: ['Healing Effect', 'CD Reduction', 'Max Mana']
    }
  ];
}