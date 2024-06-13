import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimDoctPage } from './claim-doct.page';

describe('ClaimDoctPage', () => {
  let component: ClaimDoctPage;
  let fixture: ComponentFixture<ClaimDoctPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimDoctPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
