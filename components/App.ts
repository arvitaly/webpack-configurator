import { Component } from "neweb-components";
import { BehaviorSubject, Observable } from "rxjs";
import EditorComponent from "./Editor";
import VisionComponent from "./Vision";
class App extends Component<{
    component: Observable<Component<any>>;
}> {
    content$ = new BehaviorSubject("");
    beforeMount() {
        this.addElement("editor", new EditorComponent({
            content$: this.content$,
        }));
        this.addElement("vision", new VisionComponent({
            content: this.content$,
        }));
    }
    getTemplate() {
        return require("./App.template.html");
    }
}
export default App;
