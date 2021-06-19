import React from 'react';

import { IThemeProps } from '../../material';
import s from './greeting.module.css';

const Greeting: React.FC<IThemeProps> = props => {
   const adjustFontSize = (reg: boolean): {} => {
      const width = window.innerWidth / 30 + 20; // get window width
      if(reg){ // option 1: get title size
         return ({
            fontSize: `${width}px`
         });
      };
      return ({ // option 2: get small size (description)
         fontSize: `${width / 2}px`
      });
   };
   return (
      <div className={s[`${props.theme}Greeting`]}>
         <p className={s[`${props.theme}Greeting-title`]} style={adjustFontSize(true)}>Hey, I'm Munga!</p>
         <em className={s[`${props.theme}Greeting-desc`]} style={adjustFontSize(false)}>a web developer</em>
      </div>
   );
}

export default Greeting;