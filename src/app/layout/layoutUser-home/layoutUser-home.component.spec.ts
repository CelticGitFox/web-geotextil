import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutUserHomeComponent } from './layoutUser-home.component';

describe('LayoutComHomeComponent', () => {
  let component: LayoutUserHomeComponent;
  let fixture: ComponentFixture<LayoutUserHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutUserHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
