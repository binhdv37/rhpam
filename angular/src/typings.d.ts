﻿// tslint:disable
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
///<reference path="../node_modules/moment/moment.d.ts"/>

// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;
declare var Push: any;

declare namespace abp {
  namespace ui {
    function setBusy(elm?: any, text?: any, delay?: any): void;
    function clearBusy(elm?: any, delay?: any): void;
  }
}

interface JQuery {
  inputmask(...any): any;
  jstree(...args: any[]): any;
}
