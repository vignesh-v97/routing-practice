import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductListingComponent } from './category-product-listing.component';

describe('CategoryProductListingComponent', () => {
  let component: CategoryProductListingComponent;
  let fixture: ComponentFixture<CategoryProductListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
