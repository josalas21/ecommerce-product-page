import ProductAmountButtons from "./ProductAmountButtons";
import ProductCarousel from "./ProductCarousel";
import ProductDescription from "./ProductDescription";
import ProductGallery from "./ProductGallery";
import ProductPrice from "./ProductPrice";
import CartButton from "./buttons/CartButton";

function ProductLayout({
  PRODUCT,
  itemCount,
  addItem,
  subtractItem,
  handleCartItems,
}) {
  return (
    <div class="flex container flex-wrap mx-auto sm:mt-10">
      <ProductGallery images={PRODUCT.images} thumbnails={PRODUCT.thumbnails} />

      <div class="mx-auto mt-4 flex w-10/12 h-1/3 flex-wrap gap-4 sm:w-[29rem] sm:gap-y-6">
        <ProductCarousel images={PRODUCT.images} />
        <ProductDescription
          brand={PRODUCT.brand}
          title={PRODUCT.title}
          content={PRODUCT.content}
        />
        <ProductPrice price={PRODUCT.price} />
        <ProductAmountButtons
          itemCount={itemCount}
          addItem={addItem}
          subtractItem={subtractItem}
        />
        <CartButton handleCartItems={handleCartItems} />
      </div>
    </div>
  );
}

export default ProductLayout;
