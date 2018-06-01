import highlight = require("highlight.js");
import marked = require("marked");
import { Component, ElementComponent } from "neweb-components";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
class VisionComponent extends Component<{
    content: Observable<string>;
}> {

    beforeMount() {
        marked.setOptions({
            highlight: (code, lang) => {
                return highlight.highlight(lang, code).value;
            },
        });
        this.addElement("content", new ElementComponent({
            innerHTML: this.props.content.pipe(map((value) => marked("```typescript\n" + value + "\n```"))),
        }));
    }
    getTemplate() {
        return require("./Vision.template.html");
    }
}
export default VisionComponent;
