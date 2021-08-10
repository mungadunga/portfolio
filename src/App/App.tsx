// essentials
import React, {useState, useEffect} from 'react';
import "./app.css";

// components
import HeaderButton from '../components/HeaderButton/HeaderButton';
import Greeting from '../components/Greeting/Greeting';
import Skills from '../components/Skills/Skills';
import Stats from '../components/Stats/Stats';

// material
import { FC } from '../material';
import { nApp } from '../material';

interface props {
   name?: string;
}

const App: FC<props> = (props) => {
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
            <HeaderButton name="sun-moon" onClick={() => setTheme(!theme)} icon={<i className={theme ? "fas fa-moon" : "fas fa-sun"}></i>} className={!theme && 'LightButton'}/>
         </header>
         <div>
            <Greeting theme={themeConvertToString(theme)} />
            <Skills theme={themeConvertToString(theme)} />
            <Stats theme={themeConvertToString(theme)} />
         </div>
         <footer>
            {/* nothin here yet */}
         </footer>
      </div>
   )
}

export default App;

