// react stuff
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// components
import Greeting from './components/Greeting/Greeting';
import Skills from './components/Skills/Skills';
import Stats from './components/Stats/Stats';

// styles and material
import './index.css';
import { nApp } from './material';



const App: React.FC = () => {
   const [theme, setTheme]: any = useState(true);
   const themeConvertToString: nApp.themeConvertToString = t => t ? "Dark" : "Light";
   
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
         <header>
            <button onClick={() => setTheme(!theme)} className={theme ? 'DarkButton' : 'LightButton'}><i className={theme ? "fas fa-moon" : "fas fa-sun"}></i></button>
         </header>
         <div>
            <Greeting theme={themeConvertToString(theme)}/>
            <Skills theme={themeConvertToString(theme)}/>
            <Stats theme={themeConvertToString(theme)}/>
         </div>
         <footer>
            {/* nothin here yet */}
         </footer>
      </div>
   )
};

ReactDOM.render(<App />, document.querySelector("#root"));