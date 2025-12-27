import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcategeoryComponent } from './productcategeory.component';

describe('ProductcategeoryComponent', () => {
  let component: ProductcategeoryComponent;
  let fixture: ComponentFixture<ProductcategeoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductcategeoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductcategeoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
