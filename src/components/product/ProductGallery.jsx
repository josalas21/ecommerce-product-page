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
            class="hover:opacity-40"
            onClick={() => handleClick(thumbnails.indexOf(thumb))}
          >
            <img width={90} height={90} src={thumb} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
