import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplywasteComponent } from './simplywaste.component';

describe('SimplywasteComponent', () => {
  let component: SimplywasteComponent;
  let fixture: ComponentFixture<SimplywasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplywasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplywasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
