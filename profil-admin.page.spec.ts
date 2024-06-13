import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilAdminPage } from './profil-admin.page';

describe('ProfilAdminPage', () => {
  let component: ProfilAdminPage;
  let fixture: ComponentFixture<ProfilAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
