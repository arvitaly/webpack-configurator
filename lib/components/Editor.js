"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_components_1 = require("neweb-components");
class EditorComponent extends neweb_components_1.Component {
    beforeMount() {
        this.addElement("txtEntry", new neweb_components_1.InputComponent({
            value: this.props.data.entry,
        }));
        this.addElement("txtDir", new neweb_components_1.InputComponent({
            value: this.props.data.outputDir,
        }));
        this.addElement("txtOutputFilename", new neweb_components_1.InputComponent({
            value: this.props.data.outputFileName,
        }));
        this.addElement("inputPluginHtmlLoader", new neweb_components_1.BooleanInputComponent({
            value: this.props.data.plugins.htmlLoader,
        }));
    }
    getTemplate() {
        return require("./Editor.template.html");
    }
}
exports.default = EditorComponent;
