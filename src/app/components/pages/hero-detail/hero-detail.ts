import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeroService, Hero } from '../../../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css'
})
export class HeroDetailComponents implements OnInit {
  hero = signal<Hero | null>(null);

  constructor(private route: ActivatedRoute, private heroService: HeroService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.heroService.getHeroByName(params['name']).subscribe((data: Hero | undefined) => {
        if (data) this.hero.set(data);
      });
    });
  }

  getTotalCost(items: any[]): number {
    return items.reduce((acc, item) => acc + (parseInt(item.price) || 0), 0);
  }
  calculateGold(build: any[]): number {
  return build.reduce((sum, item) => sum + (parseInt(item.price) || 0), 0);
}
}