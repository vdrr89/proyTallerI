import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTabsComponent } from './gestion-tabs.component';

describe('GestionTabsComponent', () => {
  let component: GestionTabsComponent;
  let fixture: ComponentFixture<GestionTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
