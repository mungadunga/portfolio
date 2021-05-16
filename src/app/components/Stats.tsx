const Stats: React.FC<App.props> = props => {
   const [precise, setPrecise] = React.useState(false);
   
   return (
      <div>
         <img src={`../../../images/circular-graph${precise ? '2' : ''}.png`} alt="circular graph"/>
         <button onClick={() => setPrecise(!precise)}>click</button>
         <img src="../../../images/screen-time.png" alt="" />
      </div>
   )
}