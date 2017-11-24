import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/item.model';
import {ItemService} from '../shared/item.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  item: Item[];
  itemToDelete: Item;
  constructor(private itemService: ItemService,
             private router: Router) {

  }

  ngOnInit() {
    this.itemService.get().subscribe(
      items => {
        this.item = items;
      }
    );
  }

  details(item: Item) {
    this.router.navigateByUrl('/item/' + item.id);
  }

  delete(item: Item, $event) {
    console.log('delete clicked');
    this.itemToDelete = item;
    $event.stopPropagation();
  }

  deleteAborted($event) {
    this.itemToDelete = null;
    $event.stopPropagation();
  }

  deleteConfirmed($event) {
    this.itemService.delete(this.itemToDelete.id)
      .switchMap(item => this.itemService.get())
        .subscribe(
          items => {
            this.item = items;
          }
        );
    $event.stopPropagation();
  }

  createVideo() {
    this.router.navigateByUrl('/items/create');
  }
}
