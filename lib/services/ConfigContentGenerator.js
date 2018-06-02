"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const util_1 = require("../util");
class ConfigContentGenerator {
    constructor(editorData) {
        this.editorData = editorData;
        this.content = util_1.observableFromTemplateStrings `
export = {
    entry: __dirname + "/${editorData.entry}",
    output: {
        path: __dirname + "/${editorData.outputDir}",
        filename: "${editorData.outputFileName}",
    },
    ${editorData.devServer.enabled.pipe(operators_1.switchMap((v) => v ? util_1.observableFromTemplateStrings `devServer: {
        contentBase: __dirname + "${editorData.devServer.contentBase}",
    }, ` : rxjs_1.of("")))}module: {
        rules :[${editorData.plugins.htmlLoader.pipe(operators_1.map((v) => v ? `{
            test: /\.(html)$/,
            use: ["html-loader"],
        }` : ``))}],
    },
};
        `;
    }
}
exports.default = ConfigContentGenerator;
