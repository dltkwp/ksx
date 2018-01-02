import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDistributorLevelComponent } from './supplier-distributor-level.component';

describe('SupplierDistributorLevelComponent', () => {
  let component: SupplierDistributorLevelComponent;
  let fixture: ComponentFixture<SupplierDistributorLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDistributorLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDistributorLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
