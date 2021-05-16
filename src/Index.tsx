/// <reference path="./app/App.tsx" />

const Index: React.FC<{}> = props => {
   const [theme, setTheme]: any = React.useState(true);

   // saving theme to localstorage
   React.useEffect(() => {
      let parsedTheme = (localStorage.getItem("theme") || true);
      parsedTheme == 'true' ? parsedTheme = true : parsedTheme = false;
      setTheme(parsedTheme)
   }, []);

   React.useEffect(() => {
      localStorage.setItem("theme", theme)
   }, [theme]);

   return (
      <div className={theme ? "DarkApp" : "LightApp"}>
         {/* Header, dark / light mode button  */}
         <header>
            <button onClick={() => setTheme(!theme)} className={theme ? "DarkButton" : "LightButton"}><i className={theme ? "fas fa-moon" : "fas fa-sun"}></i></button>
         </header>
         {/* content  */}
         <App theme={theme ? "Dark" : "Light"} />

      </div>
   )
};

ReactDOM.render(<Index />, document.querySelector("#root"));