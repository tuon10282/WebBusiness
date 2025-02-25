import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex91ServiceProductHttpHandleErrorComponent } from './ex91-service-product-http-handle-error.component';

describe('Ex91ServiceProductHttpHandleErrorComponent', () => {
  let component: Ex91ServiceProductHttpHandleErrorComponent;
  let fixture: ComponentFixture<Ex91ServiceProductHttpHandleErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex91ServiceProductHttpHandleErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex91ServiceProductHttpHandleErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
