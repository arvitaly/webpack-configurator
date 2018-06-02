import { BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";
import { IEditorConfig } from "../components/Editor";
import ConfigContentGenerator from "./ConfigContentGenerator";

describe("ConfigContentGenerator tests", async () => {
    it("generate", async () => {
        const data: IEditorConfig = {
            entry: new BehaviorSubject("index.js"),
            outputDir: new BehaviorSubject(""),
            outputFileName: new BehaviorSubject(""),
            plugins: {
                htmlLoader: new BehaviorSubject(false),
            },
            devServer: {
                enabled: new BehaviorSubject(true),
                contentBase: new BehaviorSubject(""),
            },
        };
        const generator = new ConfigContentGenerator(data);
        expect(await generator.content.pipe(take(1)).toPromise()).toMatchSnapshot();
    });
});
