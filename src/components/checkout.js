import React, {useState} from "react";
import {itemsData, itemsDataSet} from "../data/data.js"
import ItemList from "./itemList.js";
import Cart from "./cart";

function CheckoutPage() {

    const [cart, setCart] = useState({});
    // const isMobile = window.innerWidth < 651;

    const addToCart = (product) => {
        setCart((prev) => ({
            ...prev, [product]: (prev[product] || 0) + 1,
        }));
    }

    const removeFromCart = (product) => {
        setCart((prev) => {
            if(!prev[product]) return prev;
            const updatedSet = { ...prev, [product]: prev[product] - 1, }
            if(updatedSet[product] <= 0) delete updatedSet[product];
            return updatedSet;
        })
    }

    const GetEachItemPriceTotal = (product, quantity) => {
        const productSet = itemsDataSet[product];

        if(!productSet) return 0;
        
        if(productSet.special){
            const numberOfSpecials = Math.floor( quantity / productSet.special.quantity );
            const remainingqty = quantity % productSet.special.quantity;
            const specialTotal = (remainingqty * productSet.price) + (numberOfSpecials * productSet.special.price)
            
            // console.log(specialTotal.toFixed(2));
            return specialTotal;
        }
        return quantity * productSet.price;
    }

    const calculateTotalPrice = () => {
        return Object.entries(cart).reduce(
            (sum, [product, quantity]) => sum + GetEachItemPriceTotal(product, quantity), 0
        )
    }

    
  return (
    <div className="itemsList-container" >
        {/* {isMobile ? ( <>hi there</>) : (<>desktop</>)} */}
        
        <ItemList itemsData={itemsData} addToCart={addToCart} />

        <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
        eachItemTotal={GetEachItemPriceTotal} itemsDataSet={itemsDataSet} totalPrice={calculateTotalPrice}/>

        
    </div>
  );
}

export default CheckoutPage;
