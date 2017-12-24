import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMyComponent } from './config-my.component';

describe('ConfigMyComponent', () => {
  let component: ConfigMyComponent;
  let fixture: ComponentFixture<ConfigMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
