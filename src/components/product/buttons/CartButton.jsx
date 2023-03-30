import { CartIcon } from "../../../assets";

function CartButton() {
  return (
    <button class="mb-4 flex w-screen items-center justify-center gap-2 rounded-md bg-orange-500 p-3 text-white sm:w-44 ">
      <CartIcon />
      <span class="text-sm">Add to cart</span>
    </button>
  );
}

export default CartButton;
