import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDoctPage } from './add-doct.page';

describe('AddDoctPage', () => {
  let component: AddDoctPage;
  let fixture: ComponentFixture<AddDoctPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
