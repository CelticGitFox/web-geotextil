import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmComponent } from './adm.component';

describe('AuthComponent', () => {
  let component: AdmComponent;
  let fixture: ComponentFixture<AdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
