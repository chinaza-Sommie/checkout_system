function Cart({cart, addToCart, removeFromCart, eachItemTotal, itemsDataSet, totalPrice}) {
    return (
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
                                            <div><b>Price:</b> {eachItemTotal(key,value).toFixed(2)} </div>
                                            
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
        
                        <div className="cart total"><b>Total:</b> {totalPrice().toFixed(2)}</div>
                    </>
                )}
                
        </div>
    )
}

export default Cart;