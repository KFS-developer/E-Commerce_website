import { Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ServicePage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import HomePage from './pages/HomePage'
import AddToCart from './pages/AddToCart'
import NotFound from './pages/NotFound';
import ProductDescription from './pages/ProductDescription'
import Categories from './pages/Categories'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/description/:id" element={<ProductDescription />} />
        <Route path="/category/:categoryName" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AllRoutes