import { useEffect, useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import Banner from './components/Banner';
import Developers from './components/Developers';
import { addToLS, getFromLS } from './localStorage';
import { toast } from 'react-toastify';

function App() {
  let [coins, setCoins] = useState(0);
  let [toggle, setToggle] = useState(true);
  let [selected, setSelected] = useState([]);
  const handleGetCoins = () => {
    setCoins(coins + 1000000);
  }
  const handleToggle = (bool) => {
    setToggle(bool);
  }
  useEffect(() => {
    let sd = getFromLS();
    setSelected(sd);
  }, [])
  const handleBuy = (id, amount) => {
    let alreadyExist = selected.find(d => d === id);
    if (selected.length < 6) {
      if (!alreadyExist) {
        if (coins > amount) {
          addToLS(id);
          setSelected(getFromLS);
          setCoins(coins - amount);
        }
        else
          toast.warn("out of coins.")
      }
      else
        toast.warn("Developer already exist.");
    }
    else
      toast.warn("You hit the developer limit.");
  }
  const handleDelete=(id, amount)=>{
    
  }
  return (
    <>
      <Nav coins={coins} />
      <Banner handleGetCoins={handleGetCoins} />
      <Developers handleToggle={handleToggle} toggle={toggle} selected={selected} handleBuy={handleBuy} />
    </>
  )
}
export default App