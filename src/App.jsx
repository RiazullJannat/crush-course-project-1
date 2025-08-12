import { useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner';
import Developers from './components/Developers';

function App() {
  let [coins, setCoins] = useState(0);
  let [toggle, setToggle] = useState(true);
  const handleGetCoins = () => {
    setCoins(coins + 10000);
  }
  const handleToggle = (bool) => {
    setToggle(bool);
  }
  return (
    <>
      <Nav coins={coins} />
      <Banner handleGetCoins={handleGetCoins} />
      <Developers handleToggle={handleToggle}  toggle={toggle}/>
    </>
  )
}

export default App
