import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateRequirementsComponent } from './corporate-requirements.component';

describe('CorporateRequirementsComponent', () => {
  let component: CorporateRequirementsComponent;
  let fixture: ComponentFixture<CorporateRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateRequirementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
