import { EditorView, basicSetup, EXAMPLE, images } from "../dist/index.js"
window.view = new EditorView({
    doc: 'while(TRUE) 5 + 6 * 5',
    extensions: [
        basicSetup,
        images(),
        EXAMPLE()
    ],
    parent: document.querySelector("#editorMD")
});

