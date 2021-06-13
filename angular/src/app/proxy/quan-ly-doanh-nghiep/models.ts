import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateDoanhNghiepDto {
  anhDaiDienDoanhNghiep?: string;
  tenDoanhNghiep: string;
  emailDoanhNghiep: string;
  diaChiDoanhNghiep: string;
  soDienThoaiDoanhNghiep: string;
  nganhNgheDoanhNghiep?: string;
  tenNguoiDaiDien?: string;
  emailNguoiDaiDien: string;
  chucVuNguoiDaiDien?: string;
  soDienThoaiNguoiDaiDien: string;
}

export interface DoanhNghiepDto extends FullAuditedEntityDto<string> {
  anhDaiDienDoanhNghiep?: string;
  tenDoanhNghiep?: string;
  emailDoanhNghiep?: string;
  diaChiDoanhNghiep?: string;
  soDienThoaiDoanhNghiep?: string;
  nganhNgheDoanhNghiep?: string;
  tenNguoiDaiDien?: string;
  emailNguoiDaiDien?: string;
  chucVuNguoiDaiDien?: string;
  soDienThoaiNguoiDaiDien?: string;
}

export interface GetDoanhNghiepListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
}
