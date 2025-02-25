import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingClassComponentComponent } from './binding-class-component.component';

describe('BindingClassComponentComponent', () => {
  let component: BindingClassComponentComponent;
  let fixture: ComponentFixture<BindingClassComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingClassComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingClassComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
