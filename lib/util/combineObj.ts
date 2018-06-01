import { combineLatest, Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

export default function combineObj<T>(obj: any): Observable<T> {
    const keys = Object.keys(obj);
    return combineLatest(...keys.map((key) => (obj as any)[key])).pipe(map((res) => {
        const ret: any = {};
        keys.map((key, i) => ret[key] = res[i]);
        return ret;
    }));
}

export type ObservableObject<T> = { [P in keyof T]: Observable<T[P]> };
export type SubjectObject<T> = { [P in keyof T]: Subject<T[P]> };
