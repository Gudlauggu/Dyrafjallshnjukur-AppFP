import { Component, OnInit } from '@angular/core';
import {Item} from '../shared/item.model';
import {ItemService} from '../shared/item.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];
  itemToDelete: Item;
  itemGroup: FormGroup;
  constructor(private itemService: ItemService,
             private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.itemService.get().subscribe(
      items => {
        this.items = items;
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
            this.items = items;
          }
        );
    $event.stopPropagation();
  }

  createItem() {
    this.router.navigateByUrl('/items/create');
  }
}
