# Infinite Loop

I apologize for how ugly the code and grammar is here. I saved this because it triggered a crash in code mirror
at a line in the _reduce_ function of _lezer-parser/lr/src/stack.ts_

The grammar is I mess because I was in the process of learning. I ended up in a situation below where _base_ < 0, and the 
code below went into an infinite loop.

I saved this in case you were interested in reproducing it.

        while (this.stack.length > base)
            this.stack.pop();

I am not using this grammar file so I do _not_ need to work out what is wrong with it, if it is doing something wrong to cause this error.

# To reproduce:

 - Download the _crash_ branch of this repository
 - Install and run, from the repo root
    - npm install
    - npm run prepare
    - npm start
 - Open url in a browser: http://localhost:8888/web/index.html
 - Do the following edit

Original content in editor:

    while(TRUE) 5 + 6 * 5

Place cursor before the _*_ and press return, which should make the editor look like: (but for me it goes into the infinite loop) 

    while(TRUE) 5 + 6 
    * 5
