import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaReportesComponent } from './pagina-reportes.component';

describe('PaginaReportesComponent', () => {
  let component: PaginaReportesComponent;
  let fixture: ComponentFixture<PaginaReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
