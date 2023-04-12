import { CartIcon } from "../../assets";

function CartButton({ handleCartItems }) {
  return (
    <button
      onClick={handleCartItems}
      className="mb-4 flex w-screen items-center justify-center gap-2 rounded-md bg-orange-500 p-3 text-white sm:w-44 hover:bg-orange-400"
    >
      <CartIcon />
      <span className="text-sm ">Add to cart</span>
    </button>
  );
}

export default CartButton;
