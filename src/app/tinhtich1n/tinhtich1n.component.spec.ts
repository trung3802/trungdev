import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tinhtich1nComponent } from './tinhtich1n.component';

describe('Tinhtich1nComponent', () => {
  let component: Tinhtich1nComponent;
  let fixture: ComponentFixture<Tinhtich1nComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tinhtich1nComponent]
    });
    fixture = TestBed.createComponent(Tinhtich1nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
