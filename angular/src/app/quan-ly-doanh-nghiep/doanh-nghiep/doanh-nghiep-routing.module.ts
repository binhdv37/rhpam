import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoanhNghiepComponent } from './doanh-nghiep.component';

const routes: Routes = [{ path: '', component: DoanhNghiepComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoanhNghiepRoutingModule { }
