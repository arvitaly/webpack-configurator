import { Component } from "neweb-components";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import ConfigContentGenerator from "../services/ConfigContentGenerator";
import EditorComponent, { IEditorConfig } from "./Editor";
import VisionComponent from "./Vision";
class App extends Component<{}> {
    editorData: IEditorConfig = {
        entry: new BehaviorSubject("index.js"),
        outputDir: new BehaviorSubject("dist"),
        outputFileName: new BehaviorSubject("bundle.js"),
        plugins: {
            htmlLoader: new BehaviorSubject(false),
        },
    };
    configCode = new BehaviorSubject<string>("");
    beforeMount() {
        const generator = new ConfigContentGenerator(this.editorData);
        generator.content.subscribe(this.configCode);
        this.addElement("editor", new EditorComponent({
            data: this.editorData,
        }));
        this.addElement("vision", new VisionComponent({
            content: this.configCode,
        }));
    }
    getTemplate() {
        return require("./App.template.html");
    }
}
export default App;
