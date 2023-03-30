import MinusButton from "./buttons/MinusButton";
import PlusButton from "./buttons/PlusButton";

function ProductAmountButtons() {
  return (
    <div class="flex h-12 w-screen items-center justify-between rounded-md bg-gray-100 px-6 py-2 sm:w-32">
      <MinusButton />
      <span>0</span>
      <PlusButton />
    </div>
  );
}

export default ProductAmountButtons;
