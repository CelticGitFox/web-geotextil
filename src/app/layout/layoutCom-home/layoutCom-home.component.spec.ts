import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComHomeComponent } from './layoutCom-home.component';

describe('LayoutComHomeComponent', () => {
  let component: LayoutComHomeComponent;
  let fixture: ComponentFixture<LayoutComHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
