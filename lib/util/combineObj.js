"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
function combineObj(obj) {
    const keys = Object.keys(obj);
    return rxjs_1.combineLatest(...keys.map((key) => obj[key])).pipe(operators_1.map((res) => {
        const ret = {};
        keys.map((key, i) => ret[key] = res[i]);
        return ret;
    }));
}
exports.default = combineObj;
