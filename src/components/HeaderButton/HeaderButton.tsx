// essentials 
import "./headerbutton.css";

// material
import { FC } from '../../material';

interface props {
   icon: JSX.Element;
   name?: string;
   onClick?: any;
   className?: any;
}

const HeaderButton: FC<props> = (props) => (
   <button className={`${props.className} Button`} id={Math.random().toString(16) && props.name} onClick={props.onClick}>
      {props.icon}
   </button>
);

export default HeaderButton;