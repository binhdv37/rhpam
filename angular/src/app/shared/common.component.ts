// tslint:disable
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import * as _ from 'lodash';
export class CommonComponent {

    // truyền vào 1 formGroup để reset hết các control có lỗi
    public static formReset(form: FormGroup) {
        for (const control in form.controls) {
            if (form.get(control).errors) {
                form.get(control).reset();
            }
        }
    }

    // truyền vào 1 formGroup để lấy trả vể chuôi = tên control có lỗi
    public static getControlErr(form: FormGroup) {
        let check = '';
        Object.keys(form.controls).forEach(field => {
            const control = form.get(field);
            if (control instanceof FormArray) {
                const x = this.getControlArrErr(control);
                if (check === '') {
                    check = x;
                }
            } else if (control.errors && check === '') {
                check = field;
            }
        });

        if (check !== '') {
            for (const control in form.controls) {
                if (form.controls.hasOwnProperty(control)) {
                    form.get(control).markAsTouched({ onlySelf: true });
                }
            }
            CommonComponent.autoFocus(check);
            return check;
        } else {
            return '';
        }
    }

    // Truyền vào id để focus
    public static autoFocus(id: string) {
        $('#' + id).focus();
    }

    public static getControlArrErr(form: FormArray) {
        let check = '';
        // BAT CO LOI TRUONG DAU TIEN
        form['controls'].forEach((item: FormGroup, yi: number) => {
            if (item.invalid) {
                for (const control_yi in item.controls) {
                    if (item.get(control_yi).errors) {
                        check = `${control_yi}_${yi}`;
                        break;
                    }
                }
            }
        });
        // DANH DAU TAT CA CAC INPUT LOI
        if (!_.isUndefined(check) && !_.isNull(check)) {
            form['controls'].forEach((element: FormGroup) => {
                for (const control_xi in element.controls) {
                    // TRƯỜNG HỢP FORMCONTROL
                    if (element.get(control_xi) instanceof FormControl) {
                        element.get(control_xi).markAsTouched();
                    }
                }
            });
        }
        return check;
    }
}

