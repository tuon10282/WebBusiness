import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex86ProductComponent } from './ex86-product.component';

describe('Ex86ProductComponent', () => {
  let component: Ex86ProductComponent;
  let fixture: ComponentFixture<Ex86ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex86ProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex86ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
