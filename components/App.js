"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_components_1 = require("neweb-components");
const rxjs_1 = require("rxjs");
const Editor_1 = require("./Editor");
const Vision_1 = require("./Vision");
class App extends neweb_components_1.Component {
    constructor() {
        super(...arguments);
        this.content$ = new rxjs_1.BehaviorSubject("");
    }
    beforeMount() {
        this.addElement("editor", new Editor_1.default({
            content$: this.content$,
        }));
        this.addElement("vision", new Vision_1.default({
            content: this.content$,
        }));
    }
    getTemplate() {
        return require("./App.template.html");
    }
}
exports.default = App;
