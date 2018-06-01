import highlight = require("highlight.js/lib/highlight");
import javascript = require("highlight.js/lib/languages/javascript");
import marked = require("marked");
import { Component, ElementComponent } from "neweb-components";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
highlight.registerLanguage("javascript", javascript);
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
            innerHTML: this.props.content.pipe(map((value) => marked("```javascript\n" + value + "\n```"))),
        }));
    }
    getTemplate() {
        return require("./Vision.template.html");
    }
}
export default VisionComponent;
