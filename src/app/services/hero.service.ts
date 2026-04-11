import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin, catchError, of } from 'rxjs';

export interface Hero {
  name: string;
  role: string;
  image: string;
  durability: number;
  offense: number;
  control: number;
  difficulty: number;
  description: string;
  recommendedBuild: any[];
}

@Injectable({ providedIn: 'root' })
export class HeroService {
  private readonly heroApi = 'https://raw.githubusercontent.com/p3hndrx/MLBB-API/main/v1/hero-meta-final.json';
  private readonly itemApi = 'https://raw.githubusercontent.com/p3hndrx/MLBB-API/main/v1/item-meta-final.json';

  constructor(private http: HttpClient) {}

  /**
   * Generates a dynamic API-like response by merging Hero and Item data
   */
  getHeroes(): Observable<Hero[]> {
    return forkJoin({
      heroes: this.http.get<any>(this.heroApi),
      items: this.http.get<any>(this.itemApi)
    }).pipe(
      map(({ heroes, items }) => {
        const heroArray = heroes.data || [];
        const itemArray = items.data || [];

        return heroArray
          .filter((h: any) => h.hero_name && h.hero_name !== 'None')
          .map((h: any) => {
            const role = h.class || 'Fighter';
            const lane = (h.laning && h.laning.length > 0) ? h.laning[0] : 'Roam';

            return {
              name: h.hero_name,
              role: role,
              image: h.portrait || `https://placehold.co/400x600/0a0e1a/3b82f6?text=${h.hero_name}`,
              durability: h.durability || 50,
              offense: h.offense || 50,
              control: h.ability || 50,
              difficulty: h.difficulty || 50,
              description: `A dominant ${role} legend optimized for the ${lane}.`,
              // GENERATED BUILD LOGIC
              recommendedBuild: this.generateMetaBuild(role, lane, itemArray)
            };
          });
      }),
      catchError(err => {
        console.error('Data Generation Failed:', err);
        return of([]);
      })
    );
  }

  getHeroByName(name: string): Observable<Hero | undefined> {
    return this.getHeroes().pipe(
      map(heroes => heroes.find(h => h.name.toLowerCase() === name.toLowerCase()))
    );
  }

  /**
   * Internal Recommendation Engine
   */
  private generateMetaBuild(role: string, lane: string, allItems: any[]): any[] {
    // Determine target category based on role
    let targetCategory = 'Attack';
    if (role === 'Mage' || role === 'Support') targetCategory = 'Magic';
    if (role === 'Tank') targetCategory = 'Defense';
    
    // Filter items by category
    let pool = allItems.filter(i => i.category === targetCategory);

    // If hero is a Jungler, ensure they have a Jungle/Movement item first
    if (lane.toLowerCase().includes('jungle')) {
      const boots = allItems.find(i => i.category === 'Movement') || pool[0];
      return [boots, ...pool.slice(0, 5)];
    }

    return pool.slice(0, 6);
  }
}