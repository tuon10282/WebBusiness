import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex87ProductlistComponent } from './ex87-productlist.component';

describe('Ex87ProductlistComponent', () => {
  let component: Ex87ProductlistComponent;
  let fixture: ComponentFixture<Ex87ProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex87ProductlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex87ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
