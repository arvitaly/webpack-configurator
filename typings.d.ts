declare module "highlight.js/lib/highlight" {
    import highlight = require("highlight.js");
    export = highlight;
}
declare module "highlight.js/lib/languages/javascript" {
    import hl = require("highlight.js");
    var js: (hljs?: hl.HLJSStatic) => hl.IModeBase;
    export = js;
}