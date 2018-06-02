"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const highlight = require("highlight.js/lib/highlight");
const javascript = require("highlight.js/lib/languages/javascript");
const marked = require("marked");
const neweb_components_1 = require("neweb-components");
const operators_1 = require("rxjs/operators");
highlight.registerLanguage("javascript", javascript);
class VisionComponent extends neweb_components_1.Component {
    beforeMount() {
        marked.setOptions({
            highlight: (code, lang) => {
                return highlight.highlight(lang, code).value;
            },
        });
        this.addElement("content", new neweb_components_1.ElementComponent({
            innerHTML: this.props.content.pipe(operators_1.map((value) => marked("```javascript\n" + value + "\n```"))),
        }));
    }
    getTemplate() {
        return require("./Vision.template.html");
    }
}
exports.default = VisionComponent;
