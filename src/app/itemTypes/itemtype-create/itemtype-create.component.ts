import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Item} from '../../items/shared/item.model';
import {ItemType} from '../shared/itemType.model';
import {ItemtypeService} from '../shared/itemtype.service';

@Component({
  selector: 'app-itemtype-create',
  templateUrl: './itemtype-create.component.html',
  styleUrls: ['./itemtype-create.component.css']
})
export class ItemtypeCreateComponent implements OnInit {

  itemTypeGroup: FormGroup;
  itemTypeCreated = false;
  constructor(private router: Router,
              private fb: FormBuilder,
              private itemTypeService: ItemtypeService) {
    this.itemTypeGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    });
  }

  ngOnInit() {
  }

  isInvalid(controlName: string) {
    const control = this.itemTypeGroup.controls[controlName];
    return control.invalid && (control.touched || control.dirty);
  }


  isValid(controlName: string) {
    const control = this.itemTypeGroup.controls[controlName];
    return !control.invalid && (control.touched || control.dirty);
  }

  back() {
    this.router.navigateByUrl('/items/create');
  }

  closeAlert() {
    this.itemTypeCreated = false;
  }

  save() {
    const itemTypeValues = this.itemTypeGroup.value;
    const itemtype: ItemType = {
      name: itemTypeValues.name
    };
    console.log(itemtype);
    this.itemTypeService.create(itemtype)
      .subscribe(itemtype => {
        this.itemTypeGroup.reset();
        this.itemTypeCreated = true;
        setTimeout(() => {
          this.itemTypeCreated = false;
        }, 3000);
      });
  }
}
