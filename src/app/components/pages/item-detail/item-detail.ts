import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ItemService, Item } from '../../../services/item.service';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './item-detail.html',
  styleUrl: './item-detail.css'
})
export class ItemDetailComponent implements OnInit {
  item = signal<Item | null>(null);

  constructor(private route: ActivatedRoute, private itemService: ItemService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemService.getItemByName(params['name']).subscribe(data => {
        if (data) this.item.set(data);
      });
    });
  }

  formatStatName(key: any): string {
    if (typeof key !== 'string') return '';
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }
}