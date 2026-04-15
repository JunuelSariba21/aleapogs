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

  filteredItems = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.allItems().filter(item =>
      item.item_name.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(data => {
      console.log('Loaded items:', data);
      this.allItems.set(data);
    });
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchQuery.set(value);
  }
}