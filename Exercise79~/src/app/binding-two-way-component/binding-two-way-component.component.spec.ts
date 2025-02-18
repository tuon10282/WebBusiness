import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingTwoWayComponentComponent } from './binding-two-way-component.component';

describe('BindingTwoWayComponentComponent', () => {
  let component: BindingTwoWayComponentComponent;
  let fixture: ComponentFixture<BindingTwoWayComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingTwoWayComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingTwoWayComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
