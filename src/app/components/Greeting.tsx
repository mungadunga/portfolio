const Greeting: React.FC<App.props> = props => {
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
      <div className={`${props.theme}Greeting`}>
         <p className={`${props.theme}Greeting-title`} style={adjustFontSize(true)}>Hey, I'm Munga!</p>
         <em className={`${props.theme}Greeting-desc`} style={adjustFontSize(false)}>a web developer</em>
      </div>
   );
}

