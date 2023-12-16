import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';
import styled from 'styled-components';

const Home = () => {
  const data ={
    name: "E Shopping",
  }
  return (
    <>
    <Wrapper>
    <HeroSection  myData ={data}/>
    <FeatureProduct />
    <Services />
    <Trusted />
    </Wrapper>
    </>
  )
};

const Wrapper =styled.section`
background-color:rgb(15, 15, 51);
color: white;

`;


export default Home
