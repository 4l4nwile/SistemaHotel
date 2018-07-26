import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIzquierdoComponent } from './form-izquierdo.component';

describe('FormIzquierdoComponent', () => {
  let component: FormIzquierdoComponent;
  let fixture: ComponentFixture<FormIzquierdoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIzquierdoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIzquierdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
