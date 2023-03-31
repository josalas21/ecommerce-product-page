import { MinusButton, PlusButton } from "../../components";

function ProductAmountButtons({ itemCount, addItem, subtractItem }) {
  return (
    <div class="flex h-12 w-screen items-center justify-between rounded-md bg-gray-100 px-6 py-2 sm:w-32">
      <MinusButton subtractItem={subtractItem} />
      <span>{itemCount} </span>
      <PlusButton addItem={addItem} />
    </div>
  );
}

export default ProductAmountButtons;
