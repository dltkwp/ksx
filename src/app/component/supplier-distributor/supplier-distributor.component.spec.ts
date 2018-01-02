import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDistributorComponent } from './supplier-distributor.component';

describe('SupplierDistributorComponent', () => {
  let component: SupplierDistributorComponent;
  let fixture: ComponentFixture<SupplierDistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDistributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
