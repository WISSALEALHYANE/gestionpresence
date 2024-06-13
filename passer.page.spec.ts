import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasserPage } from './passer.page';

describe('PasserPage', () => {
  let component: PasserPage;
  let fixture: ComponentFixture<PasserPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
