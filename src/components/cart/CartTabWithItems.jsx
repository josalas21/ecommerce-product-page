import {
  ItemCardDetails,
  DeleteButton,
  CheckoutButton,
} from "../../components";

function CartTabWithItems({ PRODUCT, cartItems, deleteCartItems }) {
  return (
    <div class="flex flex-wrap justify-between ">
      <ItemCardDetails PRODUCT={PRODUCT} cartItems={cartItems} />
      <DeleteButton deleteCartItems={deleteCartItems} />
      <CheckoutButton />
    </div>
  );
}

export default CartTabWithItems;
