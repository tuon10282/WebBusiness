import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaryearmodelComponent } from './lunaryearmodel.component';

describe('LunaryearmodelComponent', () => {
  let component: LunaryearmodelComponent;
  let fixture: ComponentFixture<LunaryearmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LunaryearmodelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunaryearmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
