import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyrateComponent } from './hourlyrate.component';

describe('HourlyrateComponent', () => {
  let component: HourlyrateComponent;
  let fixture: ComponentFixture<HourlyrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
