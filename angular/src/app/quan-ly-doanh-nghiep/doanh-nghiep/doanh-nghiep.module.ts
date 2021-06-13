import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoanhNghiepRoutingModule } from './doanh-nghiep-routing.module';
import { DoanhNghiepComponent } from './doanh-nghiep.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateOrEditDoanhNghiepModalComponent } from './create-or-edit-doanh-nghiep-modal/create-or-edit-doanh-nghiep-modal.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [DoanhNghiepComponent, CreateOrEditDoanhNghiepModalComponent],
  imports: [
    CommonModule,
    DoanhNghiepRoutingModule,
    SharedModule,
    MatTabsModule,
  ]
})
export class DoanhNghiepModule { }
