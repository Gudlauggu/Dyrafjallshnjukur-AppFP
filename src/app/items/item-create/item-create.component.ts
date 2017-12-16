import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemType} from '../../itemTypes/shared/itemType.model';
import {Item} from '../shared/item.model';
import {ItemService} from '../shared/item.service';
import {ItemtypeService} from '../../itemTypes/shared/itemtype.service';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  itemGroup: FormGroup;
  itemCreated = false;
  itemTypesIn: ItemType[];
  @Input()
  itemTypeId: number;
  constructor(private router: Router,
              private fb: FormBuilder,
              private itemService: ItemService,
              private itemTypeService: ItemtypeService) {
    this.itemGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      // type: ['', [Validators.required, ]]
    });
  }

  ngOnInit() {
    this.itemTypeService.get().subscribe(
      itemTypes => {
        this.itemTypesIn = itemTypes;
      }
    );
  }

  isInvalid(controlName: string) {
    const control = this.itemGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }


  isValid(controlName: string) {
    const control = this.itemGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }

  back() {
    this.router.navigateByUrl('/items');
  }

  closeAlert() {
    this.itemCreated = false;
  }

  save() {
    console.log(this.itemTypeId);
    const itemValues = this.itemGroup.value;
    const item: Item = {
      name: itemValues.name,
      itemTypeId: this.itemTypeId
    };
    console.log(item);
    this.itemService.create(item)
      .subscribe(item => {
        this.itemGroup.reset();
        this.itemCreated = true;
        setTimeout(() => {
          this.itemCreated = false;
        }, 3000);
      });
  }

  handleEvent(value) {
    console.log(value);
    this.itemTypeId = value;
  }

  createItemType() {
    this.router.navigateByUrl('/itemtype/create');
  }
}
