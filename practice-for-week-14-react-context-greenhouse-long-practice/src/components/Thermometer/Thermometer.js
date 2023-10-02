import ReactSlider from "react-slider";
import './Thermometer.css';
import {  useClimateContext } from "../../context/ClimateContext";
import { useEffect, useState } from "react";
function Thermometer() {
  const {temperature,setTemperature}=useClimateContext()
  const [desiredTemperature, setDesiredTemperature] = useState(temperature);

  useEffect(() => {
    // Step 3: Create a setTimeout function to update the actual temperature
    const timer = setTimeout(() => {
      if (temperature > desiredTemperature) {
        setTemperature(temperature - 1);
      } else if (temperature < desiredTemperature) {
        setTemperature(temperature + 1);
      }
    }, 1000); // Change temperature every 1 second
    
    // Step 4: Include a cleanup function to clear the timeout
    return () => {
      clearTimeout(timer);
    };
  }, [desiredTemperature, temperature]);

  console.log(temperature)
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {setTemperature(val);}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;