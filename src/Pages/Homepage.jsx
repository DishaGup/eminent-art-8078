import React from 'react'
import Banner from '../Components/HomePage/Banner'
import Navigationbar from '../Components/HomePage/Navigationbar'
import ProductCard from '../Components/HomePage/ProductCard'
import ProductsRay from '../Components/HomePage/ProductsRay'

const Homepage = () => {
  return (
    <div>
<Navigationbar/>


 {/* <Banner/>  */}
<ProductsRay/>
    </div>

  )
}

export default Homepage