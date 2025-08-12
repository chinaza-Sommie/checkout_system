function Header({cartVisible, setCartVisible}) {
  return (
    <div className="checkoutHeader">
      <div>
        Checkout System
      </div>
      <div className="cartIcon goBackSign" onClick={()=> setCartVisible(!cartVisible)}>
        {cartVisible ? (
          <div className=""> {`< `}back</div>
        ): (
          <i className="fa-solid fa-cart-shopping"></i>
        )}
        
      </div>

    </div>
  );
}

export default Header;
