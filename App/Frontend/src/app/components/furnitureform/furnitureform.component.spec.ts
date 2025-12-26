import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureformComponent } from './furnitureform.component';

describe('FurnitureformComponent', () => {
  let component: FurnitureformComponent;
  let fixture: ComponentFixture<FurnitureformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
