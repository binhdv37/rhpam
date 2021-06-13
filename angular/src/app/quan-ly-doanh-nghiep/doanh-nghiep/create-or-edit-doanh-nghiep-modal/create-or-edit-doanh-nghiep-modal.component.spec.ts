import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditDoanhNghiepModalComponent } from './create-or-edit-doanh-nghiep-modal.component';

describe('CreateOrEditDoanhNghiepModalComponent', () => {
  let component: CreateOrEditDoanhNghiepModalComponent;
  let fixture: ComponentFixture<CreateOrEditDoanhNghiepModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditDoanhNghiepModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrEditDoanhNghiepModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
