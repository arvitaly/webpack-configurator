import { combineLatest, of } from "rxjs";
import { map } from "rxjs/operators";
export function observableFromTemplateStrings(strings: TemplateStringsArray, ...values: any[]) {
    const observableValues = values
        .map((v) => typeof (v.subscribe) === "function" ? v : of(v));
    return combineLatest(observableValues).pipe(map((newValues) => String.raw(strings, ...newValues)));

}
