import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtypeCreateComponent } from './itemtype-create.component';

describe('ItemtypeCreateComponent', () => {
  let component: ItemtypeCreateComponent;
  let fixture: ComponentFixture<ItemtypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemtypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemtypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
