import { useState } from "react";
import { CartIcon } from "../../assets";
import CartTab from "./CartTab";

function Cart({ cartItems, PRODUCT, deleteCartItems }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleCartClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div class="text-gray-500">
      <button
        onClick={handleCartClick}
        class="flex h-8 w-12 items-center justify-end relative"
      >
        <CartIcon />
        {cartItems > 0 && (
          <span class="absolute top-[-4px] right-[-8px] bg-red-500 rounded-full w-[16px] h-[16px] flex justify-center items-center text-white font-bold text-xs">
            {cartItems}
          </span>
        )}
      </button>
      {isOpen && (
        <CartTab
          cartItems={cartItems}
          PRODUCT={PRODUCT}
          deleteCartItems={deleteCartItems}
        />
      )}
    </div>
  );
}

export default Cart;
