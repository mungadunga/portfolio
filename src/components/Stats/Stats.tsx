import React, { useState } from "react";

import { IThemeProps } from '../../material';
import './stats.css';

// images
import CircularGraph1 from './images/circular-graph.png';
import CircularGraph2 from './images/circular-graph2.png';
import ScreenTime from './images/screen-time.png';

const Stats: React.FC<IThemeProps> = props => {
   const [width, setWidth] = useState(window.innerWidth / 35 + 20);
   
   // image stuff
   const [precise, setPrecise] = useState(false);
   const curImg: string = precise ? CircularGraph1 : CircularGraph2;
   const imageWidth: (x: number) => string =
   x => `${-0.023077 * x + 107}%`;

   const fontStyles = {
      fontSize: width
   }
   
   return (
      <div className={`${props.theme}Stats`}>
         <p className={`${props.theme}Stats-title1`} style={fontStyles}>My Tools</p>
         <img src={curImg} alt="circular graph" width={imageWidth(window.innerWidth)} id={`${props.theme}Stats-circular-graph`}/>
         <button onClick={() => setPrecise(!precise)} id={`${props.theme}Stats-precise-button`}>{precise ? "Set to normal" : "Set to precise"}</button>
         {/* <img src={ScreenTime} alt="screen time" /> */}
      </div>
   )
}

export default Stats;