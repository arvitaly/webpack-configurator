"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combineLatest_1 = require("rxjs/observable/combineLatest");
const of_1 = require("rxjs/observable/of");
const map_1 = require("rxjs/operators/map");
function observableFromTemplateStrings(strings, ...values) {
    const observableValues = values
        .map((v) => typeof (v.subscribe) === "function" ? v : of_1.of(v));
    return combineLatest_1.combineLatest(observableValues).pipe(map_1.map((newValues) => String.raw(strings, ...newValues)));
}
exports.observableFromTemplateStrings = observableFromTemplateStrings;
