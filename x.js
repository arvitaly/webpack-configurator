"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function observableFromTemplateStrings(strings, ...values) {
    const observableValues = values
        .map((v) => typeof (v.subscribe) === "function" ? v : rxjs_1.of(v));
    return rxjs_1.combineLatest(observableValues).pipe(operators_1.map((newValues) => String.raw(strings, ...newValues)));
}
const x = new rxjs_1.BehaviorSubject("XValue1");
const x2 = new rxjs_1.BehaviorSubject("X2Value1");
/*const vv = observableFromTemplateStrings`aaa${x}bbb${x2}`;

vv.subscribe((v) => console.log(v));

x.next("XValue2");*/
console.log("aaa" + x);
