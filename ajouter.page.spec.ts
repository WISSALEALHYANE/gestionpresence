import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterPage } from './ajouter.page';

describe('AjouterPage', () => {
  let component: AjouterPage;
  let fixture: ComponentFixture<AjouterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
