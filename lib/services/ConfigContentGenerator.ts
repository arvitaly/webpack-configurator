import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
import { IEditorConfig } from "../components/Editor";
import { observableFromTemplateStrings } from "../util";

class ConfigContentGenerator {
    public content: Observable<string>;
    constructor(protected editorData: IEditorConfig) {
        this.content = observableFromTemplateStrings`
export = {
    entry: __dirname + "/${editorData.entry}",
    output: {
        path: __dirname + "/${editorData.outputDir}",
        filename: "${editorData.outputFileName}",
    },
    module: {
        rules :[${editorData.plugins.htmlLoader.pipe(map((v) => v ? `{
            test: /\.(html)$/,
            use: ["html-loader"],
        }` : ``))}],
    },
};
        `;
    }
}
export default ConfigContentGenerator;
