import slipOnJ1  from 'src/assets/images/products/sonJ1.jpg';
import slipOnJ2  from 'src/assets/images/products/sonJ2.jpg';
import slipOnJ3  from 'src/assets/images/products/sonJ3.jpg';
import slipOnJ4  from 'src/assets/images/products/sonJ4.jpg';


import slipOnD1  from 'src/assets/images/products/sonD1.jpg';
import slipOnD2  from 'src/assets/images/products/sonD2.jpg';
import slipOnD3  from 'src/assets/images/products/sonD3.jpg';
import slipOnD4  from 'src/assets/images/products/sonD4.jpg';

import r4Black1  from 'src/assets/images/products/r4Htm1.jpg';
import r4Black2  from 'src/assets/images/products/r4Htm2.jpg';
import r4Black3  from 'src/assets/images/products/r4Htm3.jpg';

import m4Steel1  from 'src/assets/images/products/m4Besi1.jpg';
import m4Steel2  from 'src/assets/images/products/m4Besi2.jpg';
import m4Steel3  from 'src/assets/images/products/m4Besi3.jpg';
import m4Steel4  from 'src/assets/images/products/m4Besi4.jpg';




export const detailProducts = [
  {
    name: 'OXLAY SLIP ON MOTIF - HITAM',
    category: 'Slip-On',
    sku: 'SON-JERUK',

    instock: true,

    imageList: [slipOnJ1, slipOnJ2, slipOnJ3, slipOnJ4],

    color: {
      colorName: 'Hitam',
      colorCode: '#000',
    },

    material: 'Kulit Sintetis Premium',

    features: ['Outsole dijahit presisi', 'Toe protection', 'Desain ergonomis'],
  },

  {
    name: 'OXLAY SLIP ON DOFF - HITAM',
    category: 'Slip-On',
    sku: 'SON-DOFF',
    instock: true,

    imageList: [slipOnD1, slipOnD2, slipOnD3, slipOnD4],

    color: {
      colorName: 'Hitam',
      colorCode: '#151515',
    },

    material: 'Synthetic Leather Premium',

    features: ['Slip-on design', 'Outsole dijahit', 'Ringan dan nyaman'],


  },

  {
    name: 'OXLAY RING4 TALI - HITAM',
    category: 'Low-Cut',
    sku: 'R4-HTM',

    instock: true,

    imageList: [r4Black1, r4Black2, r4Black3],

    color: {
      colorName: 'Hitam',
      colorCode: '#151515',
    },

    material: 'Synthetic Leather Premium',

    features: ['Slip-on design', 'Outsole dijahit', 'Ringan dan nyaman'],


  },
  
  {
    name: 'OXLAY M4 TALI (UJUNG BESI) - HITAM',
    category: 'Steel Toe',
    sku: 'M4-BESI',

    instock: true,

    imageList: [m4Steel1, m4Steel2, m4Steel3, m4Steel4 ],

    color: {
      colorName: 'Hitam',
      colorCode: '#151515',
    },

    material: 'Synthetic Leather Premium',

    features: ['Slip-on design', 'Outsole dijahit', 'Ringan dan nyaman'],


  },
];
