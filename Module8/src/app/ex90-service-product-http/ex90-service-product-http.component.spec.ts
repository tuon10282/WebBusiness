import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex90ServiceProductHttpComponent } from './ex90-service-product-http.component';

describe('Ex90ServiceProductHttpComponent', () => {
  let component: Ex90ServiceProductHttpComponent;
  let fixture: ComponentFixture<Ex90ServiceProductHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex90ServiceProductHttpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex90ServiceProductHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
