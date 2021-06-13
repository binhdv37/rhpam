import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DoanhNghiepDto, DoanhNghiepService } from '@proxy/quan-ly-doanh-nghiep';
import { AppComponentBase } from 'src/app/shared/app-component-base';
import { CommonComponent } from 'src/app/shared/common.component';
import { CreateUpdateDoanhNghiepDto } from './../../../proxy/quan-ly-doanh-nghiep/models';

const EMPTY_CREATE_UPDATE = {
  tenDoanhNghiep: '',
  emailDoanhNghiep: '',
  diaChiDoanhNghiep: '',
  soDienThoaiDoanhNghiep: '',
  nganhNgheDoanhNghiep: '',
  tenNguoiDaiDien: '',
  emailNguoiDaiDien: '',
  chucVuNguoiDaiDien: '',
  soDienThoaiNguoiDaiDien: ''
};

@Component({
  selector: 'app-create-or-edit-doanh-nghiep-modal',
  templateUrl: './create-or-edit-doanh-nghiep-modal.component.html',
  styleUrls: ['./create-or-edit-doanh-nghiep-modal.component.scss']
})
export class CreateOrEditDoanhNghiepModalComponent extends AppComponentBase implements OnInit {

  @Input() id: string;
  form: FormGroup;
  isActive = false;
  saving = false;

  selectedDoanhNghiep = {} as DoanhNghiepDto; // declare selectedDoanhNghiep
  createUpdateInputDto: CreateUpdateDoanhNghiepDto;

  constructor(
    injector: Injector,
    private fb: FormBuilder,
    public modal: NgbActiveModal,
    private doanhNghiepService: DoanhNghiepService,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.show();
  }

  show() {
    this.createUpdateInputDto = EMPTY_CREATE_UPDATE;
    if (!this.id) {
      this.selectedDoanhNghiep = {} as DoanhNghiepDto;
      this.buildForm();
    } else {
      this.doanhNghiepService.get(this.id).subscribe((doanhNghiep) => {
        this.selectedDoanhNghiep = doanhNghiep;
        this.buildForm();
      });
    }
  }

  buildForm() {
    this.form = this.fb.group({
      anhDaiDienDoanhNghiep: [this.selectedDoanhNghiep.anhDaiDienDoanhNghiep || ''],
      tenDoanhNghiep: [this.selectedDoanhNghiep.tenDoanhNghiep || '', Validators.compose([
        Validators.required,
        Validators.maxLength(this.enums.MaxLengthEnum.MaxLengthName),
      ])],
      emailDoanhNghiep: [this.selectedDoanhNghiep.emailDoanhNghiep || '', {
        validators: [Validators.required, Validators.email]
      }],
      diaChiDoanhNghiep: [this.selectedDoanhNghiep.diaChiDoanhNghiep || '', Validators.compose([
        Validators.required,
        Validators.maxLength(this.enums.MaxLengthEnum.MaxLengthAddress),
      ])],
      soDienThoaiDoanhNghiep: [this.selectedDoanhNghiep.soDienThoaiDoanhNghiep || '', Validators.compose([
        Validators.required,
        Validators.maxLength(this.enums.MaxLengthEnum.MaxLengthPhone),
      ])],
      nganhNgheDoanhNghiep: [this.selectedDoanhNghiep.nganhNgheDoanhNghiep || '', Validators.compose([
        Validators.maxLength(this.enums.MaxLengthEnum.MaxLengthName),
      ])],
      tenNguoiDaiDien: [this.selectedDoanhNghiep.tenNguoiDaiDien || '', Validators.compose([
        Validators.required,
        Validators.maxLength(this.enums.MaxLengthEnum.MaxLengthName),
      ])],
      emailNguoiDaiDien: [this.selectedDoanhNghiep.emailNguoiDaiDien || '', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(this.enums.MaxLengthEnum.MaxLengthEmail),
      ])],
      chucVuNguoiDaiDien: [this.selectedDoanhNghiep.chucVuNguoiDaiDien || '', Validators.compose([
        Validators.maxLength(this.enums.MaxLengthEnum.MaxLengthName),
      ])],
      soDienThoaiNguoiDaiDien: [this.selectedDoanhNghiep.soDienThoaiNguoiDaiDien || '', Validators.compose([
        Validators.required,
        Validators.maxLength(this.enums.MaxLengthEnum.MaxLengthPhone),
      ])],
    });
    this.isActive = true;
  }

  onSave() {
    if (CommonComponent.getControlErr(this.form) === '') {
      this.saving = true;
      this._getValueForSave();
      const request = this.id
        ? this.doanhNghiepService.update(this.id, this.createUpdateInputDto)
        : this.doanhNghiepService.create(this.createUpdateInputDto);

      request.subscribe(() => {
        this.saving = false;
        this.modal.close(true);
      });
    }
  }

  private _getValueForSave() {
    this.createUpdateInputDto.tenDoanhNghiep = this.form.get('tenDoanhNghiep').value;
    this.createUpdateInputDto.emailDoanhNghiep = this.form.get('emailDoanhNghiep').value;
    this.createUpdateInputDto.diaChiDoanhNghiep = this.form.get('diaChiDoanhNghiep').value;
    this.createUpdateInputDto.soDienThoaiDoanhNghiep = this.form.get('soDienThoaiDoanhNghiep').value;
    this.createUpdateInputDto.nganhNgheDoanhNghiep = this.form.get('nganhNgheDoanhNghiep').value;
    this.createUpdateInputDto.tenNguoiDaiDien = this.form.get('tenNguoiDaiDien').value;
    this.createUpdateInputDto.emailNguoiDaiDien = this.form.get('emailNguoiDaiDien').value;
    this.createUpdateInputDto.chucVuNguoiDaiDien = this.form.get('chucVuNguoiDaiDien').value;
    this.createUpdateInputDto.soDienThoaiNguoiDaiDien = this.form.get('soDienThoaiNguoiDaiDien').value;
  }

  onClose() {
    this.modal.close(false);
  }
}
