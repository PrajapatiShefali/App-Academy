import SelectedCoffeeBean from "./components/SelectedCoffeeBean";
import CoffeeProvider from "./context/CoffeeContext";
import SetCoffeeBean from "./components/SetCoffeeBean";
import coffeeBeans from './mockData/coffeeBeans.json';
function App() {
  return (
    <>
      <h2>Welcome to Coffee App</h2>
      <CoffeeProvider>
        <SelectedCoffeeBean/>
        <SetCoffeeBean coffeeBeans={coffeeBeans}/>
      </CoffeeProvider>
    </>
  );
}

export default App;