import { EditorView, basicSetup, EXAMPLE } from "../dist/index.js"
window.view = new EditorView({
    doc: 'while(TRUE) 5 + 6 * 5',
    extensions: [
        basicSetup,
        EXAMPLE()
    ],
    parent: document.querySelector("#editorMD")
});

