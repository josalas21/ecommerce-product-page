import { CartTabNoItems, CartTabWithItems } from "../../components";

function CartTab({ cartItems, PRODUCT, deleteCartItems }) {
  return (
    <div
      className="mt-2 bg-white md:w-[24rem] w-[18rem] rounded-lg shadow-lg overflow-hidden z-10"
      style={{ position: "absolute", top: "40px", right: "40px" }}
    >
      <div className="px-4 py-4 ">
        <p className="font-bold text-black">Cart</p> <br />
        <div className="flex container gap-8 justify-center">
          {cartItems === 0 ? (
            <CartTabNoItems />
          ) : (
            <CartTabWithItems
              PRODUCT={PRODUCT}
              cartItems={cartItems}
              deleteCartItems={deleteCartItems}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CartTab;
