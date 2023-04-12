import { MinusIcon } from "../../assets";

function MinusButton({ subtractItem }) {
  return (
    <button
      className="text-xl font-bold text-orange-500"
      onClick={subtractItem}
    >
      <MinusIcon />
    </button>
  );
}

export default MinusButton;
