import "./App.css";
import BakeryItem from "./components/BakeryItem" 
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([])
  
  function updateCart(item){
    setCart([...cart, item])
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
       
        <BakeryItem item={item} updateFunction={updateCart}/>
        
      ))}
     

      <div>
        <h2>Cart</h2>
        {
        cart.map((item, index) => (
          <div class = "CartItem">
            <p>{item.name}</p>
          </div>
        ))}
        {
          <div class = "CartItem">
             <p>{cart.map((item, index)=>(item.price))
                      .reduce((prevSum, currentPrice) => prevSum + currentPrice, 0)}</p>
          </div>
       }
      </div>
    </div>
  );
}

export default App;

