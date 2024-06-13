import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimAdminPage } from './claim-admin.page';

describe('ClaimAdminPage', () => {
  let component: ClaimAdminPage;
  let fixture: ComponentFixture<ClaimAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
