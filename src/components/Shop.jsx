// Project Imports
import { DUMMY_PRODUCTS } from '../dummy-products';
import Product from './Product';

export default function Shop() {
  const productsList = DUMMY_PRODUCTS.map((product) => (
    <li key={product.id}>
      <Product {...product} />
    </li>
  ));
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products">{productsList}</ul>
    </section>
  );
}
