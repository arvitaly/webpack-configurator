"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_components_1 = require("neweb-components");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class EditorComponent extends neweb_components_1.Component {
    constructor() {
        super(...arguments);
        this.entry$ = new rxjs_1.BehaviorSubject("");
        this.outputDir$ = new rxjs_1.BehaviorSubject("dist");
        this.outputFileName$ = new rxjs_1.BehaviorSubject("bundle.js");
    }
    beforeMount() {
        this.addElement("txtEntry", new neweb_components_1.InputComponent({
            value: this.entry$,
        }));
        this.addElement("txtDir", new neweb_components_1.InputComponent({
            value: this.outputDir$,
        }));
        this.addElement("txtOutputFilename", new neweb_components_1.InputComponent({
            value: this.outputFileName$,
        }));
        const all$ = rxjs_1.combineLatest(this.entry$, this.outputDir$, this.outputFileName$)
            .pipe(operators_1.map(([entry, outputDir, outputFileName]) => {
            return `
export = {
    entry: __dirname + "/${entry}",
    output: {
        path: __dirname + "/${outputDir}",
        filename: "${outputFileName}",
    },
};`;
        }));
        all$.subscribe((value) => this.props.content$.next(value));
    }
    getTemplate() {
        return require("./Editor.template.html");
    }
}
exports.default = EditorComponent;
