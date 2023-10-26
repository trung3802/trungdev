import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoNguyenToComponent } from './so-nguyen-to.component';

describe('SoNguyenToComponent', () => {
  let component: SoNguyenToComponent;
  let fixture: ComponentFixture<SoNguyenToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoNguyenToComponent]
    });
    fixture = TestBed.createComponent(SoNguyenToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
