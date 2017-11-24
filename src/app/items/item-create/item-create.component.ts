import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  itemGroup: FormGroup;
  constructor(private router: Router,
              private fb: FormBuilder) {
    this.itemGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      // year: ['', [Validators.required, Validators.maxLength(4), Validators.minLength(4)]]
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigateByUrl('/items');
  }

  save() {
    console.log('Saving Item');
  }

}
