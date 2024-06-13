import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctPage } from './doct.page';

describe('DoctPage', () => {
  let component: DoctPage;
  let fixture: ComponentFixture<DoctPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
