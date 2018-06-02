import { BooleanInputComponent, Component, InputComponent } from "neweb-components";
import { Subject } from "rxjs";
export interface IEditorConfig {
    entry: Subject<string>;
    outputDir: Subject<string>;
    outputFileName: Subject<string>;
    plugins: {
        htmlLoader: Subject<boolean>;
    };
    devServer: {
        enabled: Subject<boolean>;
        contentBase: Subject<string>;
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
        this.addElement("enableDevServer", new BooleanInputComponent({
            value: this.props.data.devServer.enabled,
        }));
        this.addElement("txtDevServerContentBase", new InputComponent({
            value: this.props.data.devServer.contentBase,
        }));
    }
    getTemplate() {
        return require("./Editor.template.html");
    }
}
export default EditorComponent;
