import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorGoodsComponent } from './distributor-goods.component';

describe('DistributorGoodsComponent', () => {
  let component: DistributorGoodsComponent;
  let fixture: ComponentFixture<DistributorGoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorGoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
