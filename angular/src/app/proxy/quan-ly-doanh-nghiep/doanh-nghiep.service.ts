import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { CreateUpdateDoanhNghiepDto, DoanhNghiepDto, GetDoanhNghiepListDto } from './models';
import type { PagedResultDto } from '@abp/ng.core';

@Injectable({
  providedIn: 'root',
})
export class DoanhNghiepService {
  apiName = 'Default';

  create = (input: CreateUpdateDoanhNghiepDto) =>
    this.restService.request<any, DoanhNghiepDto>({
      method: 'POST',
      url: '/api/app/doanh-nghiep',
      body: input,
    },
    { apiName: this.apiName });

  delete = (ids: string[]) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/doanh-nghiep',
      params: { ids },
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, DoanhNghiepDto>({
      method: 'GET',
      url: `/api/app/doanh-nghiep/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: GetDoanhNghiepListDto) =>
    this.restService.request<any, PagedResultDto<DoanhNghiepDto>>({
      method: 'GET',
      url: '/api/app/doanh-nghiep',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateDoanhNghiepDto) =>
    this.restService.request<any, DoanhNghiepDto>({
      method: 'PUT',
      url: `/api/app/doanh-nghiep/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
