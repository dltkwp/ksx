import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorCustomerComponent } from './distributor-customer.component';

describe('DistributorCustomerComponent', () => {
  let component: DistributorCustomerComponent;
  let fixture: ComponentFixture<DistributorCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
