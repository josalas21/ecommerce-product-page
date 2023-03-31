import { NextIcon } from "../../assets";

function NextButton({ next }) {
  return (
    <button
      class="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white"
      onClick={next}
    >
      <NextIcon />
    </button>
  );
}

export default NextButton;
