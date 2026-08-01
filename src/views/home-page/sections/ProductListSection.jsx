import React from 'react';

import { motion } from 'framer-motion';

import ProductListPage from '../../product-page/ProductListPage';
import ProductGrid from './ProductCategory';

const ProductListSection = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 2,
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
    >
      <ProductGrid />
    </motion.div>
  );
};

export default ProductListSection;
