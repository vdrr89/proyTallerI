import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUsuariosFiltroComponent } from './gestion-usuarios-filtro.component';

describe('GestionUsuariosFiltroComponent', () => {
  let component: GestionUsuariosFiltroComponent;
  let fixture: ComponentFixture<GestionUsuariosFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUsuariosFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionUsuariosFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
