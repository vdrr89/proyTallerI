import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserTabsComponent } from './new-user-tabs.component';

describe('NewUserTabsComponent', () => {
  let component: NewUserTabsComponent;
  let fixture: ComponentFixture<NewUserTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
