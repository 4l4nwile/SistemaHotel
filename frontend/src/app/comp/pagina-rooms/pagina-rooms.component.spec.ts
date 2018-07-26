import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaRoomsComponent } from './pagina-rooms.component';

describe('PaginaRoomsComponent', () => {
  let component: PaginaRoomsComponent;
  let fixture: ComponentFixture<PaginaRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
