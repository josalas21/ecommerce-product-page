import { useState } from "react";
import { PreviousButton, NextButton } from "../../components";

function ProductCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const previous = () => {
    index === 0 ? setIndex(images.length - 1) : setIndex(index - 1);
  };
  const next = () => {
    index === images.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <>
      <div className="relative bg-cover bg-center sm:hidden ">
        <img className=" bg-cover bg-center" src={images[index]} alt={index} />
        <PreviousButton previous={previous} />
        <NextButton next={next} />
      </div>
    </>
  );
}

export default ProductCarousel;
