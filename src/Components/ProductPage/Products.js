import React from 'react'
import {ProductConsumer} from '../../context/context'
import Title from '../Title'
import Product from '../product'


export default function Products() {
    return (
        <ProductConsumer>
            {value => {
                const {filteredProducts} = value
                return <section className="py-5">
                    <div className="container">
                        <div className="row">
                            <Title center="true" title="Mas productos"/>
                            {/* Productos */}
                            <div className="row py-5">
                                {filteredProducts.map(product => {
                                    return(
                                        <Product key={product.id} product={product}></Product>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            }}
        </ProductConsumer>
    )
}
