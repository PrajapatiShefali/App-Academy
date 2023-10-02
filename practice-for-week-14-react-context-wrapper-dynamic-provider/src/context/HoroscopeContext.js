
import { createContext, useState } from 'react';
import horoscopes    from '../data/horoscopes.js' 
export const HoroscopeContext = createContext();

export const HoroscopeProvider=props=>{
    const [currentSign,setCurentSign]=useState("Virgo");
                                                
    const sign=horoscopes[currentSign]
    return (
        <HoroscopeContext.Provider value={{sign,setCurentSign}}>
            {props.children}
        </HoroscopeContext.Provider>
    );
    
} 
