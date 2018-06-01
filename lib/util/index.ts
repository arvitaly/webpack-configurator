import { combineLatest } from "rxjs/observable/combineLatest";
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators/map";
export function observableFromTemplateStrings(strings: TemplateStringsArray, ...values: any[]) {
    const observableValues = values
        .map((v) => typeof (v.subscribe) === "function" ? v : of(v));
    return combineLatest(observableValues).pipe(map((newValues) => String.raw(strings, ...newValues)));

}
