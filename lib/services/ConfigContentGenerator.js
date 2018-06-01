"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = require("rxjs/operators/map");
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
    module: {
        rules :[${editorData.plugins.htmlLoader.pipe(map_1.map((v) => v ? `{
            test: /\.(html)$/,
            use: ["html-loader"],
        }` : ``))}],
    },
};
        `;
    }
}
exports.default = ConfigContentGenerator;
