// essentials
import React, { useState } from 'react';
import "./modalbutton.css";

interface props {
   button: JSX.Element;
   children: JSX.Element;
}

const ModalButton = (props: props): JSX.Element | null => {

   const [modalState, setModalState] = useState(false);

   const Content = () => (
      <div id="Modal">
         <div className="modal-content">
            <span className="close" onClick={() => setModalState(false)}>&times;</span>
            {props.children}
         </div>
      </div>
   );

   return (
      <>
         <span onClick={() => setModalState(!modalState)}>{props.button}</span>
         {modalState && <Content />}
      </>
   )

}

export default ModalButton;
