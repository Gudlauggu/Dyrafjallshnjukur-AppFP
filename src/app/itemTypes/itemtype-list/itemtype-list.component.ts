import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ItemType} from '../shared/itemType.model';
import {ItemtypeService} from '../shared/itemtype.service';

@Component({
  selector: 'app-itemtype-list',
  templateUrl: './itemtype-list.component.html',
  styleUrls: ['./itemtype-list.component.css']
})
export class ItemtypeListComponent implements OnInit {

  @Output() selectITIdOutPut: EventEmitter<any> = new EventEmitter();
  selectedItemTypeId = null;
  @Input()
  itemTypes: ItemType[];
  constructor() { }

  ngOnInit() {
  }

  sendOutEvent(itemType) {
    this.selectedItemTypeId = itemType.id;
    this.selectITIdOutPut.emit(this.selectedItemTypeId);
  }


}
