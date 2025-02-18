import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadraticModelComponent } from './quadratic-model.component';

describe('QuadraticModelComponent', () => {
  let component: QuadraticModelComponent;
  let fixture: ComponentFixture<QuadraticModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuadraticModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuadraticModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
