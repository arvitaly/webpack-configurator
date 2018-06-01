import { BooleanInputComponent, Component, InputComponent } from "neweb-components";
import { Subject } from "rxjs/Subject";
export interface IEditorConfig {
    entry: Subject<string>;
    outputDir: Subject<string>;
    outputFileName: Subject<string>;
    plugins: {
        htmlLoader: Subject<boolean>;
    };
}
class EditorComponent extends Component<{
    data: IEditorConfig;
}> {
    beforeMount() {
        this.addElement("txtEntry", new InputComponent({
            value: this.props.data.entry,
        }));
        this.addElement("txtDir", new InputComponent({
            value: this.props.data.outputDir,
        }));
        this.addElement("txtOutputFilename", new InputComponent({
            value: this.props.data.outputFileName,
        }));
        this.addElement("inputPluginHtmlLoader", new BooleanInputComponent({
            value: this.props.data.plugins.htmlLoader,
        }));
    }
    getTemplate() {
        return require("./Editor.template.html");
    }
}
export default EditorComponent;
