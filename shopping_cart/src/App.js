import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';
import Sidebar from './components/SideBar';

function App() {
  const [open, setOpen] = useState(null)
  const [mobileCategory,setMobileCategory] = useState(false)
  const [laptopCategory,setLaptopCategory] = useState(false)
  const [TVCategory,setTVCategory] = useState(false)
  const { Mobile,Laptop,TV } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const mobileButton = (value)=>{
       setMobileCategory(value)
       setLaptopCategory(false)
       setTVCategory(false)
  }
  const laptopButton = (value) => {
    setMobileCategory(false)
    setLaptopCategory(value)
    setTVCategory(false)
  } 
  const TVButton = (value) => {
    setMobileCategory(false)
    setLaptopCategory(false)
    setTVCategory(value)
  }
  const popup = (value)=>{
    setOpen(value)
  }

  return (
    <div className="App">
      <Header countCartItems={cartItems.length} popup={popup}></Header>
      <div className="row">
        <Sidebar mobileButton={mobileButton} laptopButton={laptopButton} TVButton={TVButton} />
        <Main product={mobileCategory===true?'Mobile':laptopCategory===true?'Laptop':TVCategory===true?'TV':'Mobile'} products={mobileCategory===true?Mobile:laptopCategory===true?Laptop:TVCategory===true?TV:Mobile} onAdd={onAdd}></Main>
        {open? <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          popup = {popup}
        ></Basket>:""  }
      </div>
    </div>
  );
}

export default App;