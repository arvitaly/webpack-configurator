"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_components_1 = require("neweb-components");
const BehaviorSubject_1 = require("rxjs/BehaviorSubject");
const ConfigContentGenerator_1 = require("../services/ConfigContentGenerator");
const Editor_1 = require("./Editor");
const Vision_1 = require("./Vision");
class App extends neweb_components_1.Component {
    constructor() {
        super(...arguments);
        this.editorData = {
            entry: new BehaviorSubject_1.BehaviorSubject("index.js"),
            outputDir: new BehaviorSubject_1.BehaviorSubject("dist"),
            outputFileName: new BehaviorSubject_1.BehaviorSubject("bundle.js"),
            plugins: {
                htmlLoader: new BehaviorSubject_1.BehaviorSubject(false),
            },
        };
        this.configCode = new BehaviorSubject_1.BehaviorSubject("");
    }
    beforeMount() {
        const generator = new ConfigContentGenerator_1.default(this.editorData);
        generator.content.subscribe(this.configCode);
        this.addElement("editor", new Editor_1.default({
            data: this.editorData,
        }));
        this.addElement("vision", new Vision_1.default({
            content: this.configCode,
        }));
    }
    getTemplate() {
        return require("./App.template.html");
    }
}
exports.default = App;
