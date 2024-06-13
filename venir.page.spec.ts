import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VenirPage } from './venir.page';

describe('VenirPage', () => {
  let component: VenirPage;
  let fixture: ComponentFixture<VenirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VenirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
