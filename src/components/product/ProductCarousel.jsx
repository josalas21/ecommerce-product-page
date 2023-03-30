import { useState } from "react";
import { PRODUCTS } from "../../constants/constants";

function ProductCarousel() {
  const images = PRODUCTS.images;
  const [index, setIndex] = useState(0);

  const previous = () => {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
  };
  const next = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <>
      <div class="relative bg-cover bg-center sm:hidden ">
        <img class=" bg-cover bg-center" src={images[index]} alt={index} />
        <button
          class="absolute left-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white"
          onClick={previous}
        >
          {"<"}
        </button>
        <button
          class="absolute right-5 top-[50%] -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white"
          onClick={next}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default ProductCarousel;
