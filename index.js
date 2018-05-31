"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_components_1 = require("neweb-components");
const rxjs_1 = require("rxjs");
const App_1 = require("./components/App");
const Editor_1 = require("./components/Editor");
const root = document.getElementById("root");
neweb_components_1.Component.setDocument(new neweb_components_1.Document({ window }));
neweb_components_1.render(new App_1.default({
    component: rxjs_1.of(new Editor_1.default({})),
}), root);
