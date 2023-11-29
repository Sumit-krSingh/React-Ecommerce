import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper className='test'>
  Home
    </Wrapper>
  )
}

const Wrapper = styled.section`
color:${({theme}) => theme.colors.bg};
height: 100vw;


`;
export default Home
