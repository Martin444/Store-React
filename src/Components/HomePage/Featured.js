import React from 'react'
import Product from '../product'
import {Link} from 'react-router-dom'
import Title from '../Title'
import {ProductConsumer} from '../../context/context'

export default function Featured() {
    return (
      <section className="py-5">
        <div className="container">
          {/* title */}
          <Title title="featured products" center="true" />
          {/* products */}
          <div className="row">
            <ProductConsumer>
              {value => {
                const { featuredProducts } = value;
  
                return featuredProducts.map(product => (
                  <Product key={product.id} product={product} />
                ));
              }}
            </ProductConsumer>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <Link to="/productos" className="main-link">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
