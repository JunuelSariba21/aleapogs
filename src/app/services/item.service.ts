import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';

export interface Item {
  item_name: string;
  price: string;
  category: string;
  item_icon: string;
  description?: string;
  modifiers?: string[];
  unique_passive?: string;
}

@Injectable({ providedIn: 'root' })
export class ItemService {
  private readonly itemApi = 'https://raw.githubusercontent.com/p3hndrx/MLBB-API/main/v1/item-meta-final.json';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<any>(this.itemApi).pipe(
      map(res => res.data || []),
      catchError(() => of([]))
    );
  }

  getItemByName(name: string): Observable<Item | undefined> {
    return this.getItems().pipe(
      map(items => items.find(i => i.item_name.toLowerCase() === name.toLowerCase()))
    );
  }
}