
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Card from './components/Card';
  import Boy from './components/SubheaderOption/Boy';
  import Girl from './components/SubheaderOption/Girl';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import Cart from './components/cartPage/Cart';





function App() {

let [inputState,setInputState]=useState("  ");

const [cart, setCart] = useState([]); 

 // function add to cart
  // step :2 => making logic for add to cart 
  function addToCart(product) {
    console.log("clicked on cart",product);
   
    // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((ele) => ele.id === product.id);
    console.log(productinCart,"value of productincart")
    // for empty cart array this find method will not work.

    if (productinCart) {
      if (productinCart.quantity < productinCart.totalquantity) {
        
        // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
        setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele))
      }
    }
    else {
      // spread opertor
      
      // [...cart]
      setCart([...cart, { ...product, quantity: 1 }])
    }

  }
  function deleteToCart(product){
    const productinCarttoDelete = cart.find((ele)=> ele.id=== product.id);
    console.log(productinCarttoDelete);
    if(productinCarttoDelete.quantity===1){
    setCart(cart => cart.filter(ele => {return ele.id !== productinCarttoDelete.id}))
    }else{
      setCart(cart.map((ele)=> ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity-1}: ele ))
    }
  }
  function removeCart(product) {
    setCart(cart.filter(ele=>ele.id!=product.id))
  }
  return (
    <BrowserRouter>
    <div className="App">
     
         <Header  setInputState={{setInputState,cart}}/>
     <Subheader/>
     <Routes> 
          <Route path="/"  element={<Card inputState={{inputState,addToCart}}/>}/>
          <Route path="/"  element={<Card/>}/>
          <Route path="/cartpage" element={<Cart cart={{cart,addToCart,deleteToCart,removeCart}} />}/>
          <Route path="/boy" element={<Boy addToCart={addToCart}/>} />
          <Route path="/Girl" element={<Girl addToCart={addToCart}/>} />
     </Routes>
     </div>
     </BrowserRouter>
    
   
  );
}

export default App;
