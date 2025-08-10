

function ItemsList() {
    const itemsData = [
        { product: "A", name: "item A", price: 50, special:{quantity: 3, price: 1.30}},
        { product: "B", name: "item B", price: 30, special:{quantity: 2, price: 45}},
        { product: "C", name: "item C", price: 20},
        { product: "D", name: "item D", price: 15}
    ];





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

                    

                    <button className="additem">
                        add to cart
                    </button>
                </div>
            ))}

        </div>

      <div className="itemsList-content cartdisplay">
        <div className="itemsList-title cart-title"> Your Cart </div>
        <div className="eachitem">
            <div className="itemName">
                <div id="itemDisplayImage">A</div>
                <div className="item-Description">
                    <div>Item A</div>
                    <div><b>Price:</b> 50p </div>
                    {/* <div><b>Special Offer:</b> 3 for 1.30 </div> */}
                </div>
            </div>

            

            <div className="cart-actions">
                <button>-</button>
                <div>1</div>
                <button>+</button>
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsList;
