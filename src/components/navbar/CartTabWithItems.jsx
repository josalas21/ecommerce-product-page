import { DeleteIcon } from "../../assets";

function CartTabWithItems({ PRODUCT, cartItems, deleteCartItems }) {
  return (
    <>
      <img class="h-16 w-16" src={PRODUCT.thumbnails[0]} alt="title" />
      <div class="py-2">
        <p class="font-light">
          {PRODUCT.title} <br />${PRODUCT.price} x {cartItems}
          <b class="font-medium text-black"> ${PRODUCT.price * cartItems} </b>
        </p>
      </div>
      <button onClick={deleteCartItems}>
        <DeleteIcon />
      </button>
    </>
  );
}

export default CartTabWithItems;
