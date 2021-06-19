export interface IThemeProps { theme: "Light" | "Dark"; }

export namespace main {}
export namespace skills {
   export namespace types {
      export type format = (jsx: JSX.Element) => JSX.Element; // format JSX according to clicked button
      export type logoClick = (cur: JSX.Element) => void; // call function whenever a button is clicked
      export type showModal = (b: boolean, cur: string) => any; // return the formatted text
   } 
}
export namespace stats {}
export namespace greeting {}
