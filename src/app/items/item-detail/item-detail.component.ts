import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item.model';
import {ItemService} from '../shared/item.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  confirmDelete = false;
  constructor(private itemService: ItemService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(params => this.itemService.getById(+params.get('id')))
      .subscribe(item => this.item = item);
  }

  delete() {
    this.confirmDelete = true;
  }

  abortDelete() {
    this.confirmDelete = false;
  }

  deleteConfirmed() {
    this.itemService.delete(this.item.id)
      .subscribe(item => this.router
        .navigateByUrl('items'));
  }
  back() {
    this.router.navigateByUrl('/items');
  }
}
