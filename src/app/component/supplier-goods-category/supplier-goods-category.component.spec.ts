import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierGoodsCategoryComponent } from './supplier-goods-category.component';

describe('SupplierGoodsCategoryComponent', () => {
  let component: SupplierGoodsCategoryComponent;
  let fixture: ComponentFixture<SupplierGoodsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierGoodsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierGoodsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
