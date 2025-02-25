import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex88ProducteventComponent } from './ex88-productevent.component';

describe('Ex88ProducteventComponent', () => {
  let component: Ex88ProducteventComponent;
  let fixture: ComponentFixture<Ex88ProducteventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex88ProducteventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex88ProducteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
