"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const ConfigContentGenerator_1 = require("./ConfigContentGenerator");
describe("ConfigContentGenerator tests", () => __awaiter(this, void 0, void 0, function* () {
    it("generate", () => __awaiter(this, void 0, void 0, function* () {
        const data = {
            entry: new rxjs_1.BehaviorSubject("index.js"),
            outputDir: new rxjs_1.BehaviorSubject(""),
            outputFileName: new rxjs_1.BehaviorSubject(""),
            plugins: {
                htmlLoader: new rxjs_1.BehaviorSubject(false),
            },
            devServer: {
                enabled: new rxjs_1.BehaviorSubject(true),
                contentBase: new rxjs_1.BehaviorSubject(""),
            },
        };
        const generator = new ConfigContentGenerator_1.default(data);
        expect(yield generator.content.pipe(operators_1.take(1)).toPromise()).toMatchSnapshot();
    }));
}));
