

function ItemsList() {
  return (
    <div className="itemsList-container" >

      <div className="itemsList-content itemsList">
        <div className="itemsList-title"> Items List </div>
        <div className="eachitem">
            <div className="itemName">
                <div id="itemDisplayImage">A</div>
                <div className="item-Description">
                    <div>Item A</div>
                    <div><b>Price:</b> 50p </div>
                    <div><b>Special Offer:</b> 3 for 1.30 </div>
                </div>
            </div>

            

            <button className="additem">
                add to cart
            </button>
        </div>

        <div className="eachitem">
            <div className="itemName">
                <div id="itemDisplayImage">A</div>
                <div className="item-Description">
                    <div>Item A</div>
                    <div><b>Price:</b> 50p </div>
                    <div><b>Special Offer:</b> 3 for 1.50 </div>
                </div>
            </div>

            

            <button className="additem">
                add to cart
            </button>
        </div>

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
