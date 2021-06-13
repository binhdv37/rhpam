// tslint:disable
import { PermissionService } from "@abp/ng.core";
import { ElementRef, Injector } from "@angular/core";
import { PaginatorState, SortState } from "../_metronic/shared/crud-table";
import * as Enums from './AppEnums';
import * as Models from './AppModels';
import { FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';

export abstract class AppComponentBase {
    elementRef: ElementRef;
    permission: PermissionService;

    modalSize = 'xl';
    enums = Enums;
    models = Models;
    swal = Swal;


    confirmButtonColor = '#3085d6';
    cancelButtonColor = '#d33';
    cancelButtonText = 'Hủy';
    confirmButtonText = 'Xóa';

    constructor(injector: Injector) {
        this.elementRef = injector.get(ElementRef);
        this.permission = injector.get(PermissionService);
    }

    isGranted(permissionName: string): boolean {
        return this.permission.getGrantedPolicy(permissionName);
    }

    isGrantedAny(...permissions: string[]): boolean {
        if (!permissions) {
            return false;
        }

        for (const permission of permissions) {
            if (this.isGranted(permission)) {
                return true;
            }
        }

        return false;
    }


    getSkipCount(paginator: PaginatorState) {
        return (paginator.page - 1) * paginator.pageSize;
    }

    getMaxResultCount(paginator: PaginatorState) {
        return paginator.pageSize;
    }

    getSortField(sort: SortState, column: string) {
        const isActiveColumn = sort.column === column;
        if (!isActiveColumn && column) {
            sort.column = column;
            sort.direction = 'asc';
        } else {
            sort.direction = sort.direction === 'asc' ? 'desc' : 'asc';
        }
        return `${sort.column} ${sort.direction}`;
    }

   // helpers for View
  isControlValid(control: AbstractControl): boolean {
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }
}
