import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroDrawViewComponent } from './euro-draw-view.component';

describe('EuroDrawViewComponent', () => {
  let component: EuroDrawViewComponent;
  let fixture: ComponentFixture<EuroDrawViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroDrawViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroDrawViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
