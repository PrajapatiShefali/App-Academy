import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';
import { useTheme } from '../../context/ThemeContext';
import { useEffect, useState } from 'react';
import ClimateProvider from '../../context/ClimateContext';

function Greenhouse() {
      const {themeName}=useTheme()
      console.log(themeName)
      const [themeImage,setThemeImage]=useState(dayImage)
      useEffect(()=>{
        if (themeName==="night")
        setThemeImage(nightImage)
        else
          setThemeImage(dayImage)
          console.log(themeImage)

      },[themeName,themeImage])
    

  return (
    <section>
      <img  className='greenhouse-img'
            src={themeImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateProvider>
      <ClimateStats />
      </ClimateProvider>
    </section>
  );
}

export default Greenhouse;