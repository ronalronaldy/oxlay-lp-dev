import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const ProfilePage = Loadable(lazy(() => import('../views/profile-page/ProfilePage')));
const InvoicePage = Loadable(lazy(() => import('../views/invoice-page/InvoicePage')));
const ProductListPage = Loadable(lazy(() => import('../views/product-page/ProductListPage')));
const ProductDetailPage = Loadable(lazy(() => import('../views/product-page/ProductPage')));
const HomePage = Loadable(lazy(() => import('../views/home-page/MainPage')));
const TrxPage = Loadable(lazy(() => import('../views/transactions-page/TransactionsPage')));
const ImageCropPage = Loadable(lazy(() => import('../views/image-crop/ImageCropPage')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      // Halaman awal
      { path: '/', element: <Navigate to="/home-page" replace /> },

      { path: '/home-page', element: <HomePage /> },

      { path: '/profile-page', element: <ProfilePage /> },

      { path: '/inv-page', element: <InvoicePage /> },

      { path: '/trx-page', element: <TrxPage /> },

      {
        path: '/product-page',
        element: <ProductListPage />,
      },

      {
        path: '/product-page/:sku',
        element: <ProductDetailPage />,
      },

      { path: '/image-crop', element: <ImageCropPage /> },

      { path: '*', element: <Navigate to="/auth/404" replace /> },
    ],
  },

  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '*', element: <Navigate to="/auth/404" replace /> },
    ],
  },
];

export default Router;
