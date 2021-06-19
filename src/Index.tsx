// react stuff
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// components
import Greeting from './components/Greeting/Greeting';
import Skills from './components/Skills/Skills';
// styles and material
import s from './index.module.css';
import { IThemeProps } from './material';


// content

const Main: React.FC<IThemeProps> = props => {
   return (
      <div>
         <Greeting theme={props.theme}/>
         <Skills theme={props.theme}/>
         {/* <Stats theme={props.theme}/> */}
      </div>
   );
};

// actual main component

const App: React.FC = () => {
   const [theme, setTheme]: any = useState(true);

   useEffect(() => {
      let parsedTheme = localStorage.getItem("theme") || true;
      parsedTheme === 'true' ? parsedTheme = true : parsedTheme = false;
      setTheme(parsedTheme)
   }, []);

   useEffect(() => {
      localStorage.setItem("theme", theme)
   }, [theme]);

   return (
      <div className={theme ? s.DarkApp : s.LightApp}>
         <header> {/* Header, dark / light mode button  */}
            <button onClick={() => setTheme(!theme)} className={theme ? s.DarkButton : s.LightButton}><i className={theme ? "fas fa-moon" : "fas fa-sun"}></i></button>
         </header>
         {/* content  */}
         <Main theme={theme ? "Dark" : "Light"} />
      </div>
   )
};

ReactDOM.render(<App />, document.querySelector("#root"));