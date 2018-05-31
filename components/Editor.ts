import { Component, InputComponent } from "neweb-components";
import { BehaviorSubject, combineLatest, of, Subject } from "rxjs";
import { map } from "rxjs/operators";

class EditorComponent extends Component<{
    content$: Subject<string>;
}> {
    entry$ = new BehaviorSubject("");
    outputDir$ = new BehaviorSubject("dist");
    outputFileName$ = new BehaviorSubject("bundle.js");
    beforeMount() {
        this.addElement("txtEntry", new InputComponent({
            value: this.entry$,
        }));
        this.addElement("txtDir", new InputComponent({
            value: this.outputDir$,
        }));
        this.addElement("txtOutputFilename", new InputComponent({
            value: this.outputFileName$,
        }));
        const all$ = combineLatest(this.entry$, this.outputDir$, this.outputFileName$)
            .pipe(map(([entry, outputDir, outputFileName]) => {
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
export default EditorComponent;
