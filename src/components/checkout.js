import React, {useState} from "react";
import {itemsData, itemsDataSet} from "../data/data.js"


function ItemsList() {

    const [cart, setCart] = useState({});
    const isMobile = window.innerWidth < 651;

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
        
        <div className="itemsList-content itemsList">
            <div className="itemsList-title"> Items List </div>
            {itemsData.map((item) => (
                <div className="eachitem">
                    <div className="itemName">
                        <div id="itemDisplayImage">{item.product}</div>
                        <div className="item-Description">
                            <div>{item.name}</div>
                            <div><b>Price:</b> {item.price.toFixed(2)} </div>
                            {item.special && (
                                <div><b>Special Offer:</b> {item.special.quantity} for £{(item.special.price).toFixed(2)} </div>
                            )}
                            
                        </div>
                    </div>

                    

                    <button className="additem" onClick={() => addToCart(item.product)}>
                        add to cart
                    </button>
                </div>
            ))}

        </div>

      <div className="itemsList-content cartdisplay">
        <div className="itemsList-title cart-title"> Your Cart </div>

        {Object.keys(cart).length === 0 ? (
            <div className="cart"> No items in cart just yet.</div>
        ) : (
            <>
            {Object.entries(cart).map(([key,value]) => { 
                const item = itemsDataSet[key];
                return (
                    
                        <div className="eachitem">
                            <div className="itemName">
                                <div id="itemDisplayImage">{key}</div>
                                <div className="item-Description">
                                    <div>{item.name}</div>
                                    <div><b>Price:</b> {GetEachItemPriceTotal(key,value).toFixed(2)} </div>
                                    
                                    {/* <div><b>Special Offer:</b> 3 for 1.30 </div> */}
                                </div>
                            </div>

                            

                            <div className="cart-actions">
                                <button onClick={() => removeFromCart(item.product)}>-</button>
                                <div>{value}</div>
                                <button onClick={() => addToCart(item.product)}>+</button>
                                
                            </div>
                        </div>
                  
                )})}

                <div className="cart total"><b>Total:</b> {calculateTotalPrice().toFixed(2)}</div>
            </>
        )}
        
      </div>
    </div>
  );
}

export default ItemsList;
