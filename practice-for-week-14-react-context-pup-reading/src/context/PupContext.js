import { createContext, useState, useContext } from 'react'
import banana from '../pups/banana-pup.jpg';

export const PupContext = createContext();

export function PupProvider(props) {
  const [puppyType, setPuppyType] = useState(banana);

  return (
    <PupContext.Provider value={{ puppyType, setPuppyType }}>
      {props.children}
    </PupContext.Provider>
  )
}

export function usePuppyType() {
  return useContext(PupContext);
}
