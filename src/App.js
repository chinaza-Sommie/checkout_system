import { useState } from "react";
import './App.css';
import CheckoutPage from './components/checkout';
import Header from './components/header';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  return (
    <div >
      <Header cartVisible={cartVisible} setCartVisible={setCartVisible} />
      <CheckoutPage cartVisible={cartVisible} />
    </div>
  );
}

export default App;
