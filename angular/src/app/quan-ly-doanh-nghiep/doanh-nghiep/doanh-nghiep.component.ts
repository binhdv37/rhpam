import { Component, Injector, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoanhNghiepDto, DoanhNghiepService, GetDoanhNghiepListDto } from '@proxy/quan-ly-doanh-nghiep';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { PaginatorState, SortState, GroupingState } from 'src/app/_metronic/shared/crud-table';
import { CreateOrEditDoanhNghiepModalComponent } from './create-or-edit-doanh-nghiep-modal/create-or-edit-doanh-nghiep-modal.component';
import { LocalizationService } from '@abp/ng.core';
@Component({
  selector: 'app-doanh-nghiep',
  templateUrl: './doanh-nghiep.component.html',
  styleUrls: ['./doanh-nghiep.component.scss']
})
export class DoanhNghiepComponent extends AppComponentBase implements OnInit, OnDestroy {
  paginator: PaginatorState = new PaginatorState();
  sorting: SortState = new SortState();
  column = '';
  grouping: GroupingState = new GroupingState();
  isLoading: boolean;
  filterGroup: FormGroup;
  searchGroup: FormGroup;
  doanhNghiepList: DoanhNghiepDto[] = [];
  private subscriptions: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(
    injector: Injector,
    private localizationService: LocalizationService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private doanhNghiepService: DoanhNghiepService,
  ) {
    super(injector);
  }

  // angular lifecircle hooks
  ngOnInit(): void {
    this.searchForm();
    this.getData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  // search
  searchForm() {
    this.searchGroup = this.fb.group({
      searchTerm: [''],
    });
  }

  // getData
  getData() {
    const input: GetDoanhNghiepListDto = {
      skipCount: this.getSkipCount(this.paginator),
      maxResultCount: this.getMaxResultCount(this.paginator),
      sorting: this.getSortField(this.sorting, this.column),
      filter: this.searchGroup.get('searchTerm').value
    };
    this.isLoading = true;
    this.doanhNghiepService.getList(input).pipe(finalize(() => {
      this.isLoading = false;
    })).subscribe(result => {
      this.doanhNghiepList = result.items;
      this.paginator.total = result.totalCount;
      this.grouping.clearRows(result.items.map(e => e.id));
    });
  }

  // sorting
  sort(column: string) {
    this.column = column;
    this.getData();
  }

  // pagination
  paginate() {
    this.getData();
  }

  // form actions
  create() {
    this.edit(undefined);
  }

  edit(id: number) {
    const modalRef = this.modalService.open(CreateOrEditDoanhNghiepModalComponent,
      {
        size: this.modalSize,
        backdrop: 'static',
        keyboard: false
      });
    modalRef.componentInstance.id = id;
    modalRef.result.then((res: boolean) => {
      if (res) {
        this.getData();
      }
    });
  }

  delete() {
    this.swal.fire({
      title: this.localizationService.instant('::BanCoChacKhong'),
      text: this.localizationService.instant('::HoiXoaDoanhNghiep'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: this.confirmButtonColor,
      cancelButtonColor: this.cancelButtonColor,
      cancelButtonText: this.cancelButtonText,
      confirmButtonText: this.confirmButtonText
    }).then((result) => {
      if (result.value) {
        this.doanhNghiepService.delete(this.grouping.getSelectedRows()).subscribe(() => this.getData());
      }
    });
  }
}
