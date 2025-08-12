// import './App.css';


function ItemList( {itemsData, addToCart}) {
  return (
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
  );
}

export default ItemList;
