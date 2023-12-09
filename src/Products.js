import React from 'react'
import styled from 'styled-components'
import Sort from './components/Sort';
import FilterSection from './components/FilterSection';
import ProductList from './components/ProductList';
import { useFilterContext } from './context/filter_context';

const Products = () => {
 return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
          </div>
          <section className='product-view--sort'>
            <div className="sort-filter">
              <Sort />
            </div>
            <div className="main-product">
              <ProductList />
            </div>
          </section>

      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
.grid-filter-column{
  grid-template-columns: 0.2fr 1fr;
  gap:1rem;
}

@media(max-width: ${({theme}) =>theme.media.mobile}){
  .grid-filter-column{
    grid-template-column : 1fr;
  }
}


`;


export default Products
