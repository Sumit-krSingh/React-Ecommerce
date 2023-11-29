import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Cart from './Cart'
import Products from './Products'
import SingleProduct from './SingleProduct'
import Contact from './Contact'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'





const App = () => {
  const theme ={
    color: {
      bg: "black",
    },
  }
  return (
  <>
   <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path='/' element ={<Home />}></Route>
        <Route path='/about' element ={<About />}></Route>
        <Route path='/products' element ={<Products />}></Route>
        <Route path='/contact' element ={<Contact />}></Route>
        <Route path='/singleproduct/:id' element ={<SingleProduct />}></Route>
        <Route path='/cart' element ={<Cart />}></Route>


      </Routes>
    </Router>
    </ThemeProvider>

  </>
  )
}

export default App
