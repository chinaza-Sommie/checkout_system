import ItemList from "./itemList.js";
import Cart from "./cart";
import { useCart } from "../functions/functions";


function CheckoutPage({cartVisible}) {   
    const { cart, setCart, addToCart, removeFromCart, itemsData, itemsDataSet, GetEachItemPriceTotal, calculateTotalPrice, isMobile} = useCart();

    return (
        <div className="itemsList-container" >
            {isMobile ? ( 
                cartVisible ? (
                    <Cart cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
                    eachItemTotal={GetEachItemPriceTotal} itemsDataSet={itemsDataSet} totalPrice={calculateTotalPrice}/>
                    
                ) : (
                    <ItemList itemsData={itemsData} addToCart={addToCart} />
                )
            ) : (
                <>
                    <ItemList itemsData={itemsData} addToCart={addToCart} />
                    <Cart cart={cart} setCart={setCart} addToCart={addToCart} removeFromCart={removeFromCart}
                    eachItemTotal={GetEachItemPriceTotal} itemsDataSet={itemsDataSet} totalPrice={calculateTotalPrice}/>
                </>
            )}

            
        </div>
    );
}

export default CheckoutPage;
