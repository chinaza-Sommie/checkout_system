import React, {useState} from "react";

const itemsData = [
        { product: "A", name: "item A", price: 50, special:{quantity: 3, price: 1.30}},
        { product: "B", name: "item B", price: 30, special:{quantity: 2, price: 45}},
        { product: "C", name: "item C", price: 20},
        { product: "D", name: "item D", price: 15}
    ];

function ItemsList() {
    const [cart, setCart] = useState({});
    
    

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

  return (
    <div className="itemsList-container" >

        <div className="itemsList-content itemsList">
            <div className="itemsList-title"> Items List </div>
            {itemsData.map((item) => (
                <div className="eachitem">
                    <div className="itemName">
                        <div id="itemDisplayImage">{item.product}</div>
                        <div className="item-Description">
                            <div>{item.name}</div>
                            <div><b>Price:</b> {item.price}p </div>
                            {item.special && (
                                <div><b>Special Offer:</b> {item.special.quantity} for {item.special.price} </div>
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
            <div> No items in cart just yet.</div>
        ) : (
            Object.entries(cart).map(([key,value]) => { 
                const item = itemsData.find((item) => item.product === key);
                return (
                    <div className="eachitem">
                    <div className="itemName">
                        <div id="itemDisplayImage">{key}</div>
                        <div className="item-Description">
                            <div>{item.name}</div>
                            <div><b>Price:</b> {item.price} </div>
                            {/* <div><b>Special Offer:</b> 3 for 1.30 </div> */}
                        </div>
                    </div>

                    

                    <div className="cart-actions">
                        <button onClick={() => removeFromCart(item.product)}>-</button>
                        <div>{value}</div>
                        <button onClick={() => addToCart(item.product)}>+</button>
                        
                    </div>
                </div>
                )
            })
        )}
        
      </div>
    </div>
  );
}

export default ItemsList;
