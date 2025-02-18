import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEventComponentComponent } from './binding-event-component.component';

describe('BindingEventComponentComponent', () => {
  let component: BindingEventComponentComponent;
  let fixture: ComponentFixture<BindingEventComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingEventComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingEventComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
