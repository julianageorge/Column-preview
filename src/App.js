import './App.css';
import './index.css';
import Cards from './Cards';
import sedens from"./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="App flex flex-col md:flex-row justify-center mt-10 font-lexend">
      <div className="bg-Orange">
      <Cards image={sedens} title="Sedans" description=" Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
      or on your next road trip." button="Learn More"/></div>
      <div className='bg-cyan '>
      <Cards image={suvs} title="SUVs" description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
    off-road adventures." button="Learn More"/>
    </div>
    <div className='bg-dark_cyan '>
      <Cards image={luxury} title="Luxury" description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style." button="Learn More"/>
    </div>
  
    </div>
  );
}

export default App;
