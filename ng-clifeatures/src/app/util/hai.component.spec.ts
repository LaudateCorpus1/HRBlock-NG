import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaiComponent } from './hai.component';

describe('HaiComponent', () => {
  let component: HaiComponent;
  let fixture: ComponentFixture<HaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
