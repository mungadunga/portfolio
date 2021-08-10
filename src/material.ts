export type FC<P> = (props: P) => JSX.Element;

export namespace nApp {
   export type themeConvertToString = (t: boolean) => "Dark" | "Light";
}

export namespace skills {
   export namespace types {
      export type format = (jsx: JSX.Element) => JSX.Element; // format JSX according to clicked button
      export type logoClick = (cur: JSX.Element) => void; // call function whenever a button is clicked
      export type showModal = (b: boolean, cur: string) => any; // return the formatted text
   } 
}