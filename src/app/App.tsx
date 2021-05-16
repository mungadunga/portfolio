/// <reference path="./components/Greeting.tsx" />
/// <reference path="./components/Skills.tsx" />
/// <reference path="./components/Stats.tsx" />

namespace App { export interface props { theme: "Light" | "Dark"; }}

const App: React.FC<App.props> = props => {
   return (
      <div>
         <Greeting theme={props.theme}/>
         <Skills theme={props.theme}/>
         {/* <Stats theme={props.theme}/> */}
      </div>
   );
};