import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListePrePage } from './liste-pre.page';

describe('ListePrePage', () => {
  let component: ListePrePage;
  let fixture: ComponentFixture<ListePrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
