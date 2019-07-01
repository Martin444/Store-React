import React from 'react'
import Productos from '../Components/ProductPage/Products'
import Hero from '../Components/Hero'
import productBcg from '../images/productsBcg.jpeg'

export default function Products() {
    return (
        <div>
            <Hero img={productBcg} />
            <Productos/>
        </div>
    )
}
