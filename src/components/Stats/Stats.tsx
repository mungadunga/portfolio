import React, { useState } from "react";

import { IThemeProps } from '../../material';
import './stats.css';

const Stats: React.FC<IThemeProps> = props => {
   const [precise, setPrecise] = useState(false);
   
   return (
      <div>
         <img src={`../../../images/circular-graph${precise ? '2' : ''}.png`} alt="circular graph"/>
         <button onClick={() => setPrecise(!precise)}>click</button>
         <img src="../../../images/screen-time.png" alt="" />
      </div>
   )
}

export default Stats;