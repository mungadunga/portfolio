interface ILang {
   title: string;
   overall: string;
   display: () => JSX.Element;
}

interface IObj {
   javascript: ILang;
   typescript: ILang;
   react: ILang;
   sass: ILang;
   html: ILang;
   css: ILang;
   java: ILang;
   nodejs: ILang;
   git: ILang;
   github: ILang;
   d3: ILang;
   markdown: ILang;
   deno: ILang;
}

let options: IObj = {
   javascript: {
      title: "JavaScript",
      overall: "Overall: 9/10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.javascript.title}</p>
            <p className="Modal-lang-overall">{options.javascript.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <p className="Modal-lang-subtitle">OOP:</p>
               <ul>
                  <li>Abstraction</li>
                  <li>Encapsulation (keeping fields within a class private)</li>
                  <li>Inheritance</li>
                  <li>Polymorphism (method overriding)</li>
                  <li>As well as all basic concepts of OOP javascript</li>
               </ul>
               <br />
               <p className="Modal-lang-subtitle">FP:</p>
               <ul>
                  <li>Shared State (props passed between scopes)</li>
                  <li>Immutability (prevent methods / vars from being modified after it's creation: eg Object.freeze)</li>
                  <li>Reusability</li>
                  <li>Containers, Functors, Lists, and Streams (eg map(), filter(), reduce()...)</li>
                  <li>And of course basic stuff like ternary operator, default params, rest params, spread op, new Set(), IIFE, regex...</li>
               </ul>
               <br />
               <p className="Modal-lang-subtitle">Other:</p>
               <ul>
                  <li>Destructuring, import/export, modules...</li>
               </ul>
            </div>
         </>
      )
   },
   typescript: {
      title: "TypeScript",
      overall: "Overall: 8/10",
      display: () => (
         <>
            <p className="Modal-lang-title">TypeScript</p>
            <p className="Modal-lang-overall">Overall: 8/10</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>Types, interfaces, Generics</li>
                  <li>Namespaces, modules, reusable types, .d.ts files and triple slash directives</li>
                  <li>TSX (TypeScript + React), enums, Utility types(eg Required{"<Types>"})</li>
                  <li>keyof, typeof, as, protected, readonly, private, static and override keywords</li>
                  <li>Abstract classes and optionnal props / params</li>
               </ul>
               <br />
               <p>Unfortunately...</p>
               <ul>
                  <li>I'm not using typescript at it's full potential (eg i don't use generics and utility types commonly)</li>
                  <li>I'm working on that 👍</li>
               </ul>
            </div>
         </>
      )
   },
   react: {
      title: "React",
      overall: "Overall: 6.9/10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.react.title}</p>
            <p className="Modal-lang-overall">{options.react.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>State and props</li>
                  <li>Functional and class components</li>
                  <li>Component lifecycle (eg componentDidMount()...)</li>
                  <li>TypeScript react + tsconfig to make the perfect project setup</li>
               </ul>
            </div>
         </>
      )
   },
   sass: {
      title: "SASS",
      overall: "Overall: 5 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.sass.title}</p>
            <p className="Modal-lang-overall">{options.sass.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>minxins, if statements, $variables</li>
                  <li>each and white loops</li>
                  <li>@extend, @import and multiple folder setup</li>
               </ul>
               <br />
               <ul>
                  <li>Just like typescript, i'm not using sass to it's full potential (however it is syntactically awesome)</li>
               </ul>
            </div>
         </>
      )
   },
   html: {
      title: "Hyper-Text Markup Language ",
      overall: "Overall: 8 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.html.title}</p>
            <p className="Modal-lang-overall">{options.html.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>Solid knowledge about almost every html tag</li>
               </ul>
               <br />
               <ul>
                  <li>I dont't like {"<table>"} tags</li>
               </ul>
            </div>
         </>
      )
   },
   css: {
      title: "Cascading Style Sheets",
      overall: "Overall: 8 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.css.title}</p>
            <p className="Modal-lang-overall">{options.css.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>I can style pretty well however i don't go really deep into css (::before, ::after and all that professionnal styling is not for me)</li>
               </ul>
            </div>
         </>
      )
   },
   java: {
      title: "Java",
      overall: "Overall: 4 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.java.title}</p>
            <p className="Modal-lang-overall">{options.java.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>variables, final keyword, class constructors</li>
                  <li>basic loops, arrays, methods, toString()</li>
               </ul>
               <br />
               <ul>
                  <li>I can also do OOP javascript stuff (click on the javascript logo for more info)</li>
               </ul>
            </div>
         </>
      )
   },
   nodejs: {
      title: "Nodejs",
      overall: "Overall: 7 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.nodejs.title}</p>
            <p className="Modal-lang-overall">{options.nodejs.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>npm, dependencies, commonJS</li>
                  <li>backend javascript projects (like discordjs bot for example)</li>
                  <li>project setup, package.json...</li>
               </ul>
            </div>
         </>
      )
   },
   git: {
      title: "Git and Github",
      overall: "Overall: 6 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.git.title}</p>
            <p className="Modal-lang-overall">{options.git.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>Create a repo, use version control, create branches</li>
                  <li>push new versions</li>
                  <li>Github: pull requests, host website...</li>
               </ul>
            </div>
         </>
      )
   },
   github: {
      title: "Git and Github",
      overall: "Overall: 6 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.git.title}</p>
            <p className="Modal-lang-overall">{options.git.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>Create a repo, use version control, create branches</li>
                  <li>push new versions</li>
                  <li>Github: pull requests, host website...</li>
               </ul>
            </div>
         </>
      )
   },
   d3: {
      title: "Data-Driven Documents",
      overall: "Overall: 4 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.d3.title}</p>
            <p className="Modal-lang-overall">{options.d3.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>Make basic charts, graphs and tables</li>
                  <li>Click here to see an example: https://mungadunga.github.io/Francium/index.html</li>
                  <li>D3 is actually frontend but i'm putting it here just to fix the page layout lol</li>
               </ul>
            </div>
         </>
      )
   },
   markdown: {
      title: "Markdown",
      overall: "Overall: 9 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.markdown.title}</p>
            <p className="Modal-lang-overall">{options.markdown.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <ul>
                  <li>Make a well organised markdown page</li>
                  <li>Use html tags to improve it</li>
               </ul>
            </div>
         </>
      )
   },
   deno: {
      title: "Deno",
      overall: "Overall: 3 / 10",
      display: () => (
         <>
            <p className="Modal-lang-title">{options.deno.title}</p>
            <p className="Modal-lang-overall">{options.deno.overall}</p>
            <br />
            <div className="Modal-lang-description">
               <p className="Modal-lang-description">No description</p>
            </div>
         </>
      )
   },
}