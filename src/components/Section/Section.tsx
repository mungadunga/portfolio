// essentials
import "./section.css";

// material
import { FC } from '../../material';

interface props {
   name: string;
   children?: JSX.Element;
}

const Section: FC<props> = (props) => {
   return (
      <div id={props.name}>
         {props.children}
      </div>
   )
}

export default Section;