"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const neweb_components_1 = require("neweb-components");
const App_1 = require("./components/App");
const root = document.getElementById("root");
neweb_components_1.Component.setDocument(new neweb_components_1.Document({ window }));
neweb_components_1.render(new App_1.default(), root);
