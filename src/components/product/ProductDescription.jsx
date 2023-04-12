function ProductDescription({ brand, title, content }) {
  return (
    <>
      <h6 className="w-screen text-xs text-orange-500">{brand}</h6>
      <h4 className="text-xl font-bold sm:text-3xl">{title}</h4>
      <p className="text-xs text-gray-500 sm:text-base">{content}</p>
    </>
  );
}

export default ProductDescription;
