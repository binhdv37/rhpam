import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from '../_metronic/shared/crud-table';

@NgModule({
  declarations: [
  ],
  imports: [
    CoreModule,
    NgbDropdownModule,
    NgxValidateCoreModule.forRoot(),
    InlineSVGModule,
    CRUDTableModule,
  ],
  exports: [
    CoreModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    InlineSVGModule,
    CRUDTableModule,
  ],
  providers: []
})
export class SharedModule { }
