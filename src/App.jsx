import { useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner';

function App() {
  let [coins, setCoins] = useState(0);
  const handleGetCoins = () => {
    setCoins(coins + 10000);
  }
  return (
    <>
      <Nav coins={coins} />
      <Banner handleGetCoins={handleGetCoins}/>
    </>
  )
}

export default App
