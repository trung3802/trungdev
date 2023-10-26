import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tinhtong1nComponent } from './tinhtong1n.component';

describe('Tinhtong1nComponent', () => {
  let component: Tinhtong1nComponent;
  let fixture: ComponentFixture<Tinhtong1nComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tinhtong1nComponent]
    });
    fixture = TestBed.createComponent(Tinhtong1nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
