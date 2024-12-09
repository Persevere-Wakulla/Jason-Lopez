import './App.css'
import {
  createBrowserRouter,
  Route, createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
// pages
import HomePage from './components/pages/HomePage'
import Products, { productsLoader } from './components/pages/Products'
import Category from './components/pages/Category'
import NotFound from './components/errors/NotFound'
// layouts
import MainLayout from './components/layouts/MainLayout'
import ProductLayout, { SingleProductLoader } from './components/layouts/ProductLayout'
import ProductParent from './components/pages/ProductParent'
import ShoppingCart from './components/layouts/ShoppingCart'
import Billing from './components/pages/Billing'
import Checkout from './components/pages/Checkout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/'
      element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="shoppingcart" element={<ShoppingCart />}>
        <Route index element={<Billing />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
      <Route path="products" element={<ProductParent />}>
        <Route index loader={productsLoader} element={<Products />} />
        <Route path=':id' loader={SingleProductLoader}
          element={<ProductLayout />} />
      </Route>
      <Route path='categories' loader={productsLoader} element={<Category />} />
      <Route path='*' element={<NotFound />} />

    </Route>
    </>

  )
)
export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
