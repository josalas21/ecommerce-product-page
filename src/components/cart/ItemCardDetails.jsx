function ItemCardDetails({ PRODUCT, cartItems }) {
  return (
    <>
      <img
        className="md:h-16 md:w-16 h-12 w-12"
        src={PRODUCT.thumbnails[0].img}
        alt="title"
      />
      <div className="md:py-2 text-sm md:text-base">
        <p className="font-light">
          {PRODUCT.title} <br />${PRODUCT.price} x {cartItems}
          <b className="font-medium text-black">
            {" "}
            ${PRODUCT.price * cartItems}{" "}
          </b>
        </p>
      </div>
    </>
  );
}

export default ItemCardDetails;
