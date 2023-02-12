import {parser} from "./syntax.grammar"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"

export const EXAMPLELanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Block: delimitedIndent({closing: "}", align: false})
      }),
      foldNodeProp.add({
        Block: foldInside
      }),
      styleTags({
        Identifier: t.variableName,
        Numeric: t.float,
        Integer: t.integer,
        Complex: t.float,
        Logical: t.bool,
        Character: t.string,
        Comment: t.lineComment,
        "function": t.lineComment,
        "( )": t.paren
      })
    ]
  }),
  languageData: {
    commentTokens: {line: "#"}
  }
})

export function EXAMPLE() {
  return new LanguageSupport(EXAMPLELanguage)
}
