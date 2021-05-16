const Greeting = props => {
    const adjustFontSize = (reg) => {
        const width = window.innerWidth / 30 + 20; // get window width
        if (reg) { // option 1: get title size
            return ({
                fontSize: `${width}px`
            });
        }
        ;
        return ({
            fontSize: `${width / 2}px`
        });
    };
    return (React.createElement("div", { className: `${props.theme}Greeting` },
        React.createElement("p", { className: `${props.theme}Greeting-title`, style: adjustFontSize(true) }, "Hey, I'm Munga!"),
        React.createElement("em", { className: `${props.theme}Greeting-desc`, style: adjustFontSize(false) }, "a web developer")));
};
const Stats = props => {
    const [precise, setPrecise] = React.useState(false);
    return (React.createElement("div", null,
        React.createElement("img", { src: `../../../images/circular-graph${precise ? '2' : ''}.png`, alt: "circular graph" }),
        React.createElement("button", { onClick: () => setPrecise(!precise) }, "click"),
        React.createElement("img", { src: "../../../images/screen-time.png", alt: "" })));
};
let options = {
    javascript: {
        title: "JavaScript",
        overall: "Overall: 9/10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.javascript.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.javascript.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("p", { className: "Modal-lang-subtitle" }, "OOP:"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Abstraction"),
                    React.createElement("li", null, "Encapsulation (keeping fields within a class private)"),
                    React.createElement("li", null, "Inheritance"),
                    React.createElement("li", null, "Polymorphism (method overriding)"),
                    React.createElement("li", null, "As well as all basic concepts of OOP javascript")),
                React.createElement("br", null),
                React.createElement("p", { className: "Modal-lang-subtitle" }, "FP:"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Shared State (props passed between scopes)"),
                    React.createElement("li", null, "Immutability (prevent methods / vars from being modified after it's creation: eg Object.freeze)"),
                    React.createElement("li", null, "Reusability"),
                    React.createElement("li", null, "Containers, Functors, Lists, and Streams (eg map(), filter(), reduce()...)"),
                    React.createElement("li", null, "And of course basic stuff like ternary operator, default params, rest params, spread op, new Set(), IIFE, regex...")),
                React.createElement("br", null),
                React.createElement("p", { className: "Modal-lang-subtitle" }, "Other:"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Destructuring, import/export, modules...")))))
    },
    typescript: {
        title: "TypeScript",
        overall: "Overall: 8/10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, "TypeScript"),
            React.createElement("p", { className: "Modal-lang-overall" }, "Overall: 8/10"),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "Types, interfaces, Generics"),
                    React.createElement("li", null, "Namespaces, modules, reusable types, .d.ts files and triple slash directives"),
                    React.createElement("li", null,
                        "TSX (TypeScript + React), enums, Utility types(eg Required",
                        "<Types>",
                        ")"),
                    React.createElement("li", null, "keyof, typeof, as, protected, readonly, private, static and override keywords"),
                    React.createElement("li", null, "Abstract classes and optionnal props / params")),
                React.createElement("br", null),
                React.createElement("p", null, "Unfortunately..."),
                React.createElement("ul", null,
                    React.createElement("li", null, "I'm not using typescript at it's full potential (eg i don't use generics and utility types commonly)"),
                    React.createElement("li", null, "I'm working on that \uD83D\uDC4D")))))
    },
    react: {
        title: "React",
        overall: "Overall: 6.9/10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.react.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.react.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "State and props"),
                    React.createElement("li", null, "Functional and class components"),
                    React.createElement("li", null, "Component lifecycle (ed componentDidMount()...)"),
                    React.createElement("li", null, "TypeScript react + tsconfig to make the perfect projec setup")))))
    },
    sass: {
        title: "SASS",
        overall: "Overall: 5 / 10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.sass.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.sass.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "minxins, if statements, $variables"),
                    React.createElement("li", null, "each and white loops"),
                    React.createElement("li", null, "@extend, @import and multiple folder setup")),
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Just like typescript, i'm not using sass to it's full potential (however it is syntactically awesome)")))))
    },
    html: {
        title: "Hyper-Text Markup Language ",
        overall: "Overall: 8 / 10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.html.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.html.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "Solid knowledge about almost every html tag")),
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        "I dont't like ",
                        "<table>",
                        " tags")))))
    },
    css: {
        title: "Cascading Style Sheets",
        overall: "Overall: 8 / 10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.css.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.css.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "I can style pretty well however i don't go really deep into css (::before, ::after and all that professionnal styling is not for me)")))))
    },
    java: {
        title: "Java",
        overall: "Overall: 4 / 10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.java.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.java.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "variables, final keyword, class constructors"),
                    React.createElement("li", null, "basic loops, arrays, methods, toString()")),
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "I can also do OOP javascript stuff (click on the javascript logo for more info)")))))
    },
    nodejs: {
        title: "Nodejs",
        overall: "Overall: 7 / 10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.nodejs.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.nodejs.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "npm, dependencies, commonJS"),
                    React.createElement("li", null, "backend javascript projects (like discordjs bot for example)"),
                    React.createElement("li", null, "project setup, package.json...")))))
    },
    git: {
        title: "Git and Github",
        overall: "Overall: 6 / 10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.git.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.git.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "Create a repo, use version control, create branches"),
                    React.createElement("li", null, "push new versions"),
                    React.createElement("li", null, "Github: pull requests, host website...")))))
    },
    github: {
        title: "Git and Github",
        overall: "Overall: 6 / 10",
        display: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "Modal-lang-title" }, options.git.title),
            React.createElement("p", { className: "Modal-lang-overall" }, options.git.overall),
            React.createElement("br", null),
            React.createElement("div", { className: "Modal-lang-description" },
                React.createElement("ul", null,
                    React.createElement("li", null, "Create a repo, use version control, create branches"),
                    React.createElement("li", null, "push new versions"),
                    React.createElement("li", null, "Github: pull requests, host website...")))))
    },
};
/// <reference path="./Stats.tsx" />
/// <reference path="./modal-mat.tsx" />
const Skills = props => {
    // modal =>
    const [modal, setModal] = React.useState(false); // modal state
    const [text, setText] = React.useState(''); // store modal text
    const format = jsx => (React.createElement("div", { id: `${props.theme}Modal` },
        React.createElement("div", { id: `${props.theme}Modal-content` },
            React.createElement("p", { id: `${props.theme}Modal-times`, onClick: () => setModal(false) }, "\u00D7"),
            jsx)));
    const logoClick = cur => {
        setModal(!modal);
        setText(format(cur));
    };
    const showModal = (b, cur) => b ? cur : '';
    // modal <=
    // text styles
    const width = window.innerWidth / 35 + 20; // get window width
    const styles = {
        fontSize: width
    };
    // logo styles
    let logoSize = window.innerWidth / 50 + 40;
    if (window.innerWidth < 481) {
        logoSize *= 1.6;
    }
    return ( // i'm sorry
    React.createElement("div", { className: `${props.theme}Skills`, style: styles },
        React.createElement("p", { className: `${props.theme}Skills-title` }, "My Skills"),
        React.createElement("div", { className: `${props.theme}Skills-container` },
            React.createElement("div", { className: `${props.theme}Skills-smallcontainer1` },
                React.createElement("h1", { className: `${props.theme}Skills-frontend-title`, style: { fontSize: width / 1.5 } }, "Front-End"),
                React.createElement("div", { className: `${props.theme}Skills-frontend` },
                    React.createElement("svg", { id: "javascript", onClick: () => logoClick(format(options.javascript.display())), className: `${props.theme}Skills-logo`, width: logoSize, height: logoSize, viewBox: "0 0 256 256", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMinYMin meet" },
                        React.createElement("path", { d: "M0 0h256v256H0V0z", fill: "#F7DF1E" }),
                        React.createElement("path", { d: "M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" })),
                    React.createElement("svg", { id: "typescript", onClick: () => logoClick(format(options.typescript.display())), className: `${props.theme}Skills-logo`, width: logoSize, height: logoSize, fill: "none", version: "1.1", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("rect", { width: "512", height: "512", rx: "50", fill: "#3178c6" }),
                        React.createElement("path", { d: "m317 407v50c8.1 4.2 18 7.3 29 9.4s23 3.1 35 3.1c12 0 23-1.1 34-3.4 11-2.3 20-6.1 28-11 8.1-5.3 15-12 19-21s7.1-19 7.1-32c0-9.1-1.4-17-4.1-24s-6.6-13-12-18c-5.1-5.3-11-10-18-14s-15-8.2-24-12c-6.6-2.7-12-5.3-18-7.9-5.2-2.6-9.7-5.2-13-7.8-3.7-2.7-6.5-5.5-8.5-8.4-2-3-3-6.3-3-10 0-3.4 0.89-6.5 2.7-9.3s4.3-5.1 7.5-7.1c3.2-2 7.2-3.5 12-4.6 4.7-1.1 9.9-1.6 16-1.6 4.2 0 8.6 0.31 13 0.94 4.6 0.63 9.3 1.6 14 2.9 4.7 1.3 9.3 2.9 14 4.9 4.4 2 8.5 4.3 12 6.9v-47c-7.6-2.9-16-5.1-25-6.5s-19-2.1-31-2.1c-12 0-23 1.3-34 3.8s-20 6.5-28 12c-8.1 5.4-14 12-19 21-4.7 8.4-7 18-7 30 0 15 4.3 28 13 38 8.6 11 22 19 39 27 6.9 2.8 13 5.6 19 8.3s11 5.5 15 8.4c4.3 2.9 7.7 6.1 10 9.5 2.5 3.4 3.8 7.4 3.8 12 0 3.2-0.78 6.2-2.3 9s-3.9 5.2-7.1 7.2-7.1 3.6-12 4.8c-4.7 1.1-10 1.7-17 1.7-11 0-22-1.9-32-5.7-11-3.8-21-9.5-30-17zm-84-123h64v-41h-179v41h64v183h51z", clipRule: "evenodd", fill: "#fff", fillRule: "evenodd", style: { fill: "#fff" } })),
                    React.createElement("svg", { id: "html", onClick: () => logoClick(format(options.html.display())), className: `${props.theme}Skills-logo`, width: logoSize, height: logoSize, xmlns: "http://www.w3.org/2000/svg", viewBox: "221.807 89.47 440 621.061", enableBackground: "new 221.807 89.47 440 621.061" },
                        React.createElement("filter", { id: "a", width: "150%", height: "150%", x: "-5%", y: "-5%" },
                            React.createElement("feFlood", { floodColor: "#000", result: "floodFill", floodOpacity: ".5" }),
                            React.createElement("feComposite", { in: "floodFill", in2: "SourceAlpha", operator: "in", result: "coloredAlpha" }),
                            React.createElement("feGaussianBlur", { in: "coloredAlpha", result: "blur", stdDeviation: "8" }),
                            React.createElement("feComposite", { in: "blur", in2: "SourceGraphic", operator: "out", result: "maskedOffsetBlur" }),
                            React.createElement("feMerge", null,
                                React.createElement("feMergeNode", { in: "maskedOffsetBlur" }),
                                React.createElement("feMergeNode", { in: "SourceGraphic" }))),
                        React.createElement("g", { filter: "url(#a)" },
                            React.createElement("path", { fill: "#e44d26", d: "M261.849 660.647l-40.042-449.125h440l-40.086 449.054-180.184 49.954z" }),
                            React.createElement("path", { fill: "#f16529", d: "M441.807 672.348l145.596-40.367 34.258-383.735H441.807z" }),
                            React.createElement("path", { fill: "#ebebeb", d: "M441.807 414.82h-72.888l-5.035-56.406h77.923V303.33H303.683l1.32 14.778 13.538 151.794h123.266zM441.807 557.876l-.242.066-61.346-16.566-3.922-43.93h-55.294l7.718 86.489 112.834 31.323.252-.071z" }),
                            React.createElement("path", { d: "M262.745 89.47h27.992v27.656h25.606V89.47h27.993v83.75h-27.993v-28.044h-25.606v28.044h-27.99l-.002-83.75zM381.149 117.244h-24.642V89.47H433.8v27.774h-24.654v55.976H381.15v-55.976h-.001zM446.065 89.47h29.19l17.955 29.428 17.938-29.428h29.2v83.75h-27.882v-41.512l-19.259 29.778h-.481l-19.272-29.778v41.512h-27.39V89.47zM554.277 89.47h28v56.068h39.368v27.682h-67.368V89.47z" }),
                            React.createElement("path", { fill: "#fff", d: "M441.617 414.82v55.082h67.83l-6.395 71.44-61.435 16.58v57.307l112.924-31.294.826-9.309 12.946-145.014 1.344-14.792h-14.842zM441.617 303.33v55.084H574.67l1.103-12.382 2.51-27.924 1.318-14.778z" }))),
                    React.createElement("svg", { id: "css", onClick: () => logoClick(format(options.css.display())), className: `${props.theme}Skills-logo`, height: logoSize, width: logoSize, enableBackground: "new 0 0 1771 2499.8", viewBox: "0 0 1771 2499.8", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("path", { d: "m1387.8 92.5h-146.9l152.8 165.9v78.9h-314.8v-92.4h152.8l-152.8-165.9v-79h309zm-371.4 0h-147.1l153 165.9v78.9h-314.9v-92.4h152.8l-152.8-165.9v-79h309zm-367.8 3.8h-158.5v144.8h158.5v96.3h-271.3v-337.4h271.3z", fill: "#131313" }),
                        React.createElement("path", { d: "m161.2 2299.1-161.2-1807.7h1771l-161.4 1807.4-725.2 201z", fill: "#1572b6" }),
                        React.createElement("path", { d: "m885.5 2346.2 586-162.5 137.8-1544.5h-723.8z", fill: "#33a9dc" }),
                        React.createElement("path", { d: "m885.5 1294.1h293.4l20.2-227h-313.6v-221.6h556l-5.3 59.5-54.5 611h-496.2z", fill: "#fff" }),
                        React.createElement("path", { d: "m886.7 1869.9h-1l-246.9-66.7-15.8-176.8h-222.4l31.1 348.1 454.2 126.4h1.3v-231z", fill: "#ebebeb" }),
                        React.createElement("path", { d: "m1160.1 1506.3-26.7 296.7-247.3 66.7v231l454.5-126 3.3-37.5 38.6-431h-222.4z", fill: "#fff" }),
                        React.createElement("path", { d: "m886.3 845.5v221.7h-535.4l-4.6-49.8-10.1-112.4-5.3-59.5zm-.8 448.6v221.7h-244.1l-4.3-49.8-10.1-112.4-5.3-59.5h263.7z", fill: "#ebebeb" })),
                    React.createElement("svg", { id: "react", onClick: () => logoClick(format(options.react.display())), className: `${props.theme}Skills-logo`, height: logoSize, width: logoSize, viewBox: "175.7 78 490.6 436.9", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("g", { fill: "#61dafb" },
                            React.createElement("path", { d: "m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" }),
                            React.createElement("circle", { cx: "420.9", cy: "296.5", r: "45.7" }))),
                    React.createElement("svg", { id: "sass", onClick: () => logoClick(format(options.sass.display())), className: `${props.theme}Skills-logo`, width: logoSize, height: logoSize, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 384" },
                        React.createElement("path", { fill: "#CF649A", d: "M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z" })))),
            React.createElement("div", { className: `${props.theme}Skills-smallcontainer2` },
                React.createElement("h1", { className: `${props.theme}Skills-backend-title`, style: { fontSize: width / 1.5 } }, "Back-End"),
                React.createElement("div", { className: `${props.theme}Skills-backend` },
                    React.createElement("svg", { id: "java", onClick: () => logoClick(format(options.java.display())), className: `${props.theme}Skills-logo`, width: logoSize, height: logoSize, xmlns: "http://www.w3.org/2000/svg", viewBox: "6.527 4.399 290.829 540.906" },
                        React.createElement("path", { d: "M285.104 430.945h-2.037v-1.14h5.486v1.14h-2.025v5.688h-1.424v-5.688zm10.942.297h-.032l-2.02 5.393h-.924l-2.006-5.393h-.024v5.393h-1.343v-6.828h1.976l1.86 4.835 1.854-4.835h1.969v6.828h-1.311l.001-5.393z", fill: "#e76f00" }),
                        React.createElement("path", { d: "M102.681 291.324s-14.178 8.245 10.09 11.035c29.4 3.354 44.426 2.873 76.825-3.259 0 0 8.518 5.341 20.414 9.967-72.63 31.128-164.376-1.803-107.329-17.743M93.806 250.704s-15.902 11.771 8.384 14.283c31.406 3.24 56.208 3.505 99.125-4.759 0 0 5.937 6.018 15.271 9.309-87.815 25.678-185.624 2.025-122.78-18.833", fill: "#5382a1" }),
                        React.createElement("path", { d: "M168.625 181.799c17.896 20.604-4.701 39.146-4.701 39.146s45.439-23.458 24.571-52.833c-19.491-27.395-34.438-41.005 46.479-87.934.001-.001-127.013 31.721-66.349 101.621", fill: "#e76f00" }),
                        React.createElement("path", { d: "M264.684 321.369s10.492 8.646-11.555 15.333c-41.923 12.7-174.488 16.535-211.314.507-13.238-5.76 11.587-13.752 19.396-15.429 8.144-1.766 12.798-1.437 12.798-1.437-14.722-10.371-95.157 20.363-40.857 29.166 148.084 24.015 269.944-10.814 231.532-28.14M109.499 208.617s-67.431 16.016-23.879 21.832c18.389 2.462 55.047 1.905 89.192-.956 27.906-2.354 55.928-7.358 55.928-7.358s-9.84 4.214-16.959 9.074c-68.475 18.01-200.756 9.631-162.674-8.79 32.206-15.568 58.392-13.802 58.392-13.802M230.462 276.231c69.608-36.171 37.425-70.932 14.96-66.248-5.506 1.146-7.961 2.139-7.961 2.139s2.045-3.202 5.947-4.588c44.441-15.624 78.619 46.081-14.346 70.521 0 0 1.079-.962 1.4-1.824", fill: "#5382a1" }),
                        React.createElement("path", { d: "M188.495 4.399s38.55 38.562-36.563 97.862c-60.233 47.567-13.735 74.689-.025 105.678-35.158-31.723-60.96-59.647-43.65-85.637 25.406-38.151 95.792-56.648 80.238-117.903", fill: "#e76f00" }),
                        React.createElement("path", { d: "M116.339 374.246c66.815 4.277 169.417-2.373 171.846-33.987 0 0-4.67 11.984-55.219 21.503-57.027 10.731-127.364 9.479-169.081 2.601.002-.002 8.541 7.067 52.454 9.883", fill: "#5382a1" }),
                        React.createElement("path", { d: "M105.389 495.049c-6.303 5.467-12.96 8.536-18.934 8.536-8.527 0-13.134-5.113-13.134-13.314 0-8.871 4.937-15.357 24.739-15.357h7.328l.001 20.135m17.392 19.623V453.93c0-15.518-8.85-25.756-30.188-25.756-12.457 0-23.369 3.076-32.238 6.999l2.56 10.752c6.983-2.563 16.022-4.949 24.894-4.949 12.292 0 17.58 4.949 17.58 15.181v7.678h-6.135c-29.865 0-43.337 11.593-43.337 28.993 0 15.018 8.878 23.554 25.594 23.554 10.745 0 18.766-4.437 26.264-10.929l1.361 9.221 13.645-.002zM180.824 514.672h-21.691l-26.106-84.96h18.944l16.198 52.199 3.601 15.699c8.195-22.698 13.992-45.726 16.891-67.898h18.427c-4.938 27.976-13.822 58.684-26.264 84.96M264.038 495.049c-6.315 5.467-12.983 8.536-18.958 8.536-8.512 0-13.131-5.113-13.131-13.314 0-8.871 4.947-15.357 24.748-15.357h7.341v20.135m17.39 19.623V453.93c0-15.518-8.871-25.756-30.186-25.756-12.465 0-23.381 3.076-32.246 6.999l2.557 10.752c6.985-2.563 16.041-4.949 24.906-4.949 12.283 0 17.579 4.949 17.579 15.181v7.678h-6.146c-29.873 0-43.34 11.593-43.34 28.993 0 15.018 8.871 23.554 25.584 23.554 10.752 0 18.77-4.437 26.28-10.929l1.366 9.221 13.646-.002zM36.847 529.099c-4.958 7.239-12.966 12.966-21.733 16.206L6.527 535.2c6.673-3.424 12.396-8.954 15.055-14.104 2.3-4.581 3.252-10.485 3.252-24.604v-96.995h18.478v95.666c-.001 18.875-1.51 26.5-6.465 33.936", fill: "#e76f00" })),
                    React.createElement("svg", { id: "nodejs", onClick: () => logoClick(format(options.nodejs.display())), className: `${props.theme}Skills-logo`, width: logoSize, height: logoSize, viewBox: "0 0 256 282", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMinYMin meet" },
                        React.createElement("g", { fill: "#8CC84B" },
                            React.createElement("path", { d: "M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" }),
                            React.createElement("path", { d: "M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" }))),
                    React.createElement("svg", { id: "git", onClick: () => logoClick(format(options.git.display())), className: `${props.theme}Skills-logo`, width: logoSize, height: logoSize, viewBox: "0 0 256 256", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMinYMin meet" },
                        React.createElement("path", { d: "M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324", fill: "#DE4C36" })),
                    React.createElement("svg", { id: "github", onClick: () => logoClick(format(options.github.display())), className: `${props.theme}Skills-logo`, width: logoSize, height: logoSize, viewBox: "0 0 256 249", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMinYMin meet" },
                        React.createElement("g", { fill: "#161614" },
                            React.createElement("path", { d: "M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" }),
                            React.createElement("path", { d: "M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" })))))),
        showModal(modal, text)));
};
/// <reference path="./components/Greeting.tsx" />
/// <reference path="./components/Skills.tsx" />
/// <reference path="./components/Stats.tsx" />
const App = props => {
    return (React.createElement("div", null,
        React.createElement(Greeting, { theme: props.theme }),
        React.createElement(Skills, { theme: props.theme })));
};
/// <reference path="./app/App.tsx" />
const Index = props => {
    const [theme, setTheme] = React.useState(true);
    // saving theme to localstorage
    React.useEffect(() => {
        let parsedTheme = (localStorage.getItem("theme") || true);
        parsedTheme == 'true' ? parsedTheme = true : parsedTheme = false;
        setTheme(parsedTheme);
    }, []);
    React.useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (React.createElement("div", { className: theme ? "DarkApp" : "LightApp" },
        React.createElement("header", null,
            React.createElement("button", { onClick: () => setTheme(!theme), className: theme ? "DarkButton" : "LightButton" },
                React.createElement("i", { className: theme ? "fas fa-moon" : "fas fa-sun" }))),
        React.createElement(App, { theme: theme ? "Dark" : "Light" })));
};
ReactDOM.render(React.createElement(Index, null), document.querySelector("#root"));
//# sourceMappingURL=bundle.js.map