import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierGoodsComponent } from './supplier-goods.component';

describe('SupplierGoodsComponent', () => {
  let component: SupplierGoodsComponent;
  let fixture: ComponentFixture<SupplierGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
