import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemService, Item } from '../../../services/item.service';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './items.html',
  styleUrl: './items.css'
})
export class ItemsComponent implements OnInit {
  allItems = signal<Item[]>([]);
  searchQuery = signal('');

  // Search logic
  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.allItems().filter(i => 
      i.item_name.toLowerCase().includes(query) || 
      i.category.toLowerCase().includes(query)
    );
  });

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(data => this.allItems.set(data));
  }

  onSearch(event: Event) {
    const val = (event.target as HTMLInputElement).value;
    this.searchQuery.set(val);
  }
}