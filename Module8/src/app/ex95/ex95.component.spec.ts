import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex95Component } from './ex95.component';

describe('Ex95Component', () => {
  let component: Ex95Component;
  let fixture: ComponentFixture<Ex95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex95Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
