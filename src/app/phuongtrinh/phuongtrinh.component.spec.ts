import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhuongtrinhComponent } from './phuongtrinh.component';

describe('PhuongtrinhComponent', () => {
  let component: PhuongtrinhComponent;
  let fixture: ComponentFixture<PhuongtrinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhuongtrinhComponent]
    });
    fixture = TestBed.createComponent(PhuongtrinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
