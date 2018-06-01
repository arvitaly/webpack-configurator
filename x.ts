import { BehaviorSubject, combineLatest, of } from "rxjs";
import { map } from "rxjs/operators";

function observableFromTemplateStrings(strings: TemplateStringsArray, ...values: any[]) {
    const observableValues = values
        .map((v) => typeof (v.subscribe) === "function" ? v : of(v));
    return combineLatest(observableValues).pipe(map((newValues) => String.raw(strings, ...newValues)));

}
const x = new BehaviorSubject("XValue1");
const x2 = new BehaviorSubject("X2Value1");

/*const vv = observableFromTemplateStrings`aaa${x}bbb${x2}`;

vv.subscribe((v) => console.log(v));

x.next("XValue2");*/

console.log("aaa" + x);
