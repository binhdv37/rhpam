import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from '../../../_metronic/shared/crud-table';
import { Customer } from '../_models/customer.model';
import { environment } from '../../../../environments/environment';
import { MetronicEnvironment } from 'src/environments/metronic-environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends TableService<Customer> implements OnDestroy {
  API_URL = `${MetronicEnvironment.apiUrl}/customers`;
  constructor(@Inject(HttpClient) http) {
    super(http);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }
}
