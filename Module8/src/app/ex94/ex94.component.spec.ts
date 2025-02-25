import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex94Component } from './ex94.component';

describe('Ex94Component', () => {
  let component: Ex94Component;
  let fixture: ComponentFixture<Ex94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex94Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
