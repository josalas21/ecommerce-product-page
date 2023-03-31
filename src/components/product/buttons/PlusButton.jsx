import { PlusIcon } from "../../../assets";

function PlusButton({ addItem }) {
  return (
    <button class="text-xl font-bold text-orange-500" onClick={addItem}>
      <PlusIcon />
    </button>
  );
}

export default PlusButton;
