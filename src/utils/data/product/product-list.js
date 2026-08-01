
import {
  m4Steel1,
  m4Steel2,
  m4Steel3,
  r4Black1,
  r4Black2,
  r4Black3,
  slipOnD1,
  slipOnD2,
  slipOnD3,
  slipOnJ1,
  slipOnJ2,
  slipOnJ3,
} from './image-list';



export const detailProducts = [
  {
    name: 'OXLAY SLIP ON MOTIF - HITAM',
    category: 'Slip-On',
    sku: 'SON-JERUK',

    instock: true,

    imageList: [slipOnJ1, slipOnJ2, slipOnJ3],

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

    imageList: [slipOnD1, slipOnD2, slipOnD3],

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

    imageList: [m4Steel1, m4Steel2, m4Steel3 ],

    color: {
      colorName: 'Hitam',
      colorCode: '#151515',
    },

    material: 'Synthetic Leather Premium',

    features: ['Slip-on design', 'Outsole dijahit', 'Ringan dan nyaman'],


  },
];
