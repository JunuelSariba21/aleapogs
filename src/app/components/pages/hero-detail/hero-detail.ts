import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css',
})
export class HeroDetailComponents implements OnInit {
  // Using a signal for that modern Angular performance
  hero = signal<any>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 1. Get the hero name from the URL (/heroes/Gusion)
    const nameFromUrl = this.route.snapshot.paramMap.get('name');
    
    // 2. Find the data (In a real app, this would come from a Service/Firebase)
    this.loadHeroData(nameFromUrl);
  }

  loadHeroData(name: string | null) {
    // Mock database to simulate your project's logic
    const heroDb: Record<string, any> = {
      'Gusion': {
        name: 'Gusion',
        role: 'Assassin / Mage',
        specialty: 'Burst / Magic Damage',
        image: 'assets/heroes/gusion_banner.jpg',
        durability: 40,
        offense: 95,
        control: 50,
        difficulty: 90,
        skills: [
          { name: 'Sword Spike', type: 'Physical / Blink', desc: 'Throws a dagger in a specified direction...' },
          { name: 'Shadowblade Slaughter', type: 'Burst / AoE', desc: 'Throws daggers forward, each dealing magic damage...' },
          { name: 'Incandescence', type: 'Blink / Buff', desc: 'Resets the cooldown of Sword Spike and Shadowblade Slaughter...' }
        ],
        recommendedBuild: ['Magic Shoes', 'Genius Wand', 'Glowing Wand', 'Holy Crystal', 'Divine Glaive', 'Blood Wings']
      },
      'Miya': {
        name: 'Miya',
        role: 'Marksman',
        specialty: 'Reap / Damage',
        image: 'assets/heroes/miya_banner.jpg',
        durability: 30,
        offense: 90,
        control: 40,
        difficulty: 20,
        skills: [
          { name: 'Moon Arrow', type: 'Buff', desc: 'Miya shoots extra arrows with every basic attack...' },
          { name: 'Arrow of Eclipse', type: 'CC / AoE', desc: 'Calls upon the power of Moon Eclipse to strike an area...' },
          { name: 'Hidden Moonlight', type: 'Conceal / Remove CC', desc: 'Removes all debuffs and enters Conceal state...' }
        ],
        recommendedBuild: ['Swift Boots', 'Windtalker', 'Berserker\'s Fury', 'Haas\' Claws', 'Malefic Roar', 'Rose Gold Meteor']
      }
    };

    // Fallback if the hero isn't found
    this.hero.set(heroDb[name || ''] || heroDb['Gusion']);
  }
}