import { PreviousIcon } from "../../../assets";

function PreviousButton({ previous }) {
  return (
    <button
      class="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white"
      onClick={previous}
    >
      <PreviousIcon />
    </button>
  );
}

export default PreviousButton;
