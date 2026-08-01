import { useEffect, useState } from 'react';
import { getProducts } from '../data/product/service';

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return products;
}
