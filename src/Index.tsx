// react stuff
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// components
import Greeting from './components/Greeting/Greeting';
import Skills from './components/Skills/Skills';

// styles and material
import './index.css';
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
      parsedTheme = parsedTheme === 'true';
      setTheme(parsedTheme);
   }, []);

   useEffect(() => {
      localStorage.setItem("theme", theme);
   }, [theme]);

   return (
      <div className={theme ? 'DarkApp' : 'LightApp'}>
         <header> {/* Header, dark / light mode button  */}
            <button onClick={() => setTheme(!theme)} className={theme ? 'DarkButton' : 'LightButton'}><i className={theme ? "fas fa-moon" : "fas fa-sun"}></i></button>
         </header>
         {/* content  */}
         <Main theme={theme ? "Dark" : "Light"} />
      </div>
   )
};

ReactDOM.render(<App />, document.querySelector("#root"));