import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDerechoComponent } from './form-derecho.component';

describe('FormDerechoComponent', () => {
  let component: FormDerechoComponent;
  let fixture: ComponentFixture<FormDerechoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDerechoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
