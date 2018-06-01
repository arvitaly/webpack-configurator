import { Component, Document, render } from "neweb-components";
import App from "./components/App";

const root = document.getElementById("root") as HTMLElement;

Component.setDocument(new Document({ window }));

render(new App(), root);
