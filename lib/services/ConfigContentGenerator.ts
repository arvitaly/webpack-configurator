import { Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { IEditorConfig } from "../components/Editor";
import { observableFromTemplateStrings as t } from "../util";

class ConfigContentGenerator {
    public content: Observable<string>;
    constructor(protected editorData: IEditorConfig) {
        this.content = t`
export = {
    entry: __dirname + "/${editorData.entry}",
    output: {
        path: __dirname + "/${editorData.outputDir}",
        filename: "${editorData.outputFileName}",
    },
    ${editorData.devServer.enabled.pipe(switchMap((v) => v ? t`devServer: {
        contentBase: __dirname + "${editorData.devServer.contentBase}",
    }, ` : of("")))}module: {
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
