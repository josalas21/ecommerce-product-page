import Navbar from "../components/navbar/Navbar";
import ProductLayout from "../components/product/ProductLayout";
import { PRODUCT } from "../constants/constants";
import { useState } from "react";

function ProductContainer() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  const deleteCartItems = () => {
    setCartItems(0);
  };

  const handleCartItems = () => {
    setCartItems(cartItems + itemCount);
    setItemCount(0);
  };

  const addItem = () => {
    setItemCount(itemCount + 1);
  };
  const subtractItem = () => {
    itemCount === 0 ? setItemCount(0) : setItemCount(itemCount - 1);
  };

  return (
    <>
      <Navbar
        cartItems={cartItems}
        PRODUCT={PRODUCT}
        deleteCartItems={deleteCartItems}
      />
      <ProductLayout
        PRODUCT={PRODUCT}
        itemCount={itemCount}
        addItem={addItem}
        subtractItem={subtractItem}
        handleCartItems={handleCartItems}
      />
    </>
  );
}

export default ProductContainer;
