import ProductAmountButtons from "../components/product/ProductAmountButtons";
import ProductCarousel from "../components/product/ProductCarousel";
import ProductDescription from "../components/product/ProductDescription";
import ProductPrice from "../components/product/ProductPrice";
import CartButton from "../components/product/buttons/CartButton";
import { PRODUCT } from "../constants/constants";

function ProductContainer() {
  return (
    <div class="mx-auto mt-4 flex w-10/12 flex-wrap gap-4 sm:w-80 sm:gap-y-6">
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
  );
}

export default ProductContainer;
