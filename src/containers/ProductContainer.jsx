import ProductAmountButtons from "../components/product/ProductAmountButtons";
import ProductCarousel from "../components/product/ProductCarousel";
import ProductDescription from "../components/product/ProductDescription";
import ProductGallery from "../components/product/ProductGallery";
import ProductPrice from "../components/product/ProductPrice";
import CartButton from "../components/product/buttons/CartButton";
import { PRODUCT } from "../constants/constants";

function ProductContainer() {
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
        <ProductAmountButtons />
        <CartButton />
      </div>
    </div>
  );
}

export default ProductContainer;
