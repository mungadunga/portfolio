// essentials
import React, {useState, useEffect} from 'react';
import "./app.css";

// components
import HeaderButton from '../components/HeaderButton/HeaderButton';
import Greeting from '../components/Greeting/Greeting';
import Skills from '../components/Skills/Skills';
import Stats from '../components/Stats/Stats';
import Footer from '../components/Footer/Footer';
import ModalButton from '../components/ModalButton/ModalButton';

// material
import { FC } from '../material';
import { nApp } from '../material';

interface props {
   name?: string;
}

const App: FC<props> = (props) => {
   const [theme, setTheme]: any = useState(true); // website's theme
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
            <HeaderButton name="sun-moon" onClick={() => setTheme(!theme)} icon={<i className={theme ? "fas fa-moon" : "fas fa-sun"}></i>} className={theme ? 'DarkButton' : 'LightButton'}/>
            <ModalButton button={ <HeaderButton name="social-media" icon={<i className="fab fa-instagram"></i>} className={theme ? "DarkInstagram" : "LightInstagram"} /> }>
               <>
                  <u><h1>Follow me on social media!</h1></u><br />
                  <ul>
                     <li>Instagram:
                        <br />
                        link...
                     </li>
                     <li>Youtube:
                        <br />
                        link...
                     </li>
                     <li>
                        Github:
                        <br />
                        link...
                     </li>
                  </ul>
               </>
            </ModalButton>
         </header>
         <div>
            <Greeting theme={themeConvertToString(theme)} />
            <Skills theme={themeConvertToString(theme)} />
            <Stats theme={themeConvertToString(theme)} />
         </div>
         <footer>
            {/* <Footer theme={themeConvertToString(theme)}/> */}
         </footer>
      </div>
   )
}

export default App;

