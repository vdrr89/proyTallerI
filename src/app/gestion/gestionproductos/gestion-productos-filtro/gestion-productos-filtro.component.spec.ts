import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProductosFiltroComponent } from './gestion-productos-filtro.component';

describe('GestionProductosFiltroComponent', () => {
  let component: GestionProductosFiltroComponent;
  let fixture: ComponentFixture<GestionProductosFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionProductosFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionProductosFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
