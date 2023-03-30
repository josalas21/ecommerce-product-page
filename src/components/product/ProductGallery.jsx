import { useState } from "react";

function ProductGallery({ images, thumbnails }) {
  const [index, setIndex] = useState(0);
  const handleClick = (id) => {
    setIndex(id);
  };
  return (
    <div class="flex-wrap w-[29rem] gap-2 mx-auto hidden sm:flex">
      <img
        class="basis-full"
        width={400}
        height={400}
        src={images[index]}
        alt={index}
      />
      <div class="flex container gap-4 justify-between">
        {thumbnails.map((thumb) => (
          <button
            class="focus:opacity-40"
            onClick={() => handleClick(thumbnails.indexOf(thumb))}
          >
            <img width={90} height={90} src={thumb} alt="" />
          </button>
        ))}
      </div>
      {/* <button class="focus:opacity-40" onClick={() => handleClick(0)}>
        <img width={90} height={90} src={thumbnails[0]} alt="" />
      </button>
      <button onClick={() => handleClick(1)}>
        <img width={90} height={90} src={thumbnails[1]} alt="" />
      </button>
      <button onClick={() => handleClick(2)}>
        <img width={90} height={90} src={thumbnails[2]} alt="" />
      </button>
      <button onClick={() => handleClick(3)}>
        <img width={90} height={90} src={thumbnails[3]} alt="" />
      </button> */}
    </div>
  );
}

export default ProductGallery;
