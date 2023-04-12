import { useState } from "react";

function ProductGallery({ images, thumbnails }) {
  const [index, setIndex] = useState(0);
  const handleClick = (id) => {
    setIndex(id);
  };
  return (
    <div className="flex-wrap w-[29rem] gap-2 mx-auto hidden sm:flex">
      <img
        className="basis-full"
        width={400}
        height={400}
        src={images[index]}
        alt={index}
      />
      <div className="flex container gap-4 justify-between">
        {thumbnails.map((thumb) => (
          <button
            className="hover:opacity-40"
            onClick={() => handleClick(() => thumbnails.indexOf(thumb))}
            key={thumb.id}
          >
            <img width={90} height={90} src={thumb.img} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;
