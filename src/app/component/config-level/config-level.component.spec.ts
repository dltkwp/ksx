import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLevelComponent } from './config-level.component';

describe('ConfigLevelComponent', () => {
  let component: ConfigLevelComponent;
  let fixture: ComponentFixture<ConfigLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
