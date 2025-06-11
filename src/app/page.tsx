import { ItemProduct } from "@/components/UI/itemProduct";
import { ProdyctType } from "@/types/ProductType";

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Home() {

  const products = await fetchProducts();
  return (
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <div 
        className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6'
      >
        {products.map((product: ProdyctType) => (
          <ItemProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
