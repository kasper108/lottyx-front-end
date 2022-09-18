import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroDrawComponent } from './euro-draw.component';

describe('EuroDrawComponent', () => {
  let component: EuroDrawComponent;
  let fixture: ComponentFixture<EuroDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
