import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroDrawListComponent } from './euro-draw-list.component';

describe('EuroDrawListComponent', () => {
  let component: EuroDrawListComponent;
  let fixture: ComponentFixture<EuroDrawListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuroDrawListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroDrawListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
