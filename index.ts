import { Component, Document, render } from "neweb-components";
import { of } from "rxjs";
import App from "./components/App";
import EditorComponent from "./components/Editor";

const root = document.getElementById("root") as HTMLElement;

Component.setDocument(new Document({ window }));

render(new App({
    component: of(new EditorComponent({})),
}), root);
