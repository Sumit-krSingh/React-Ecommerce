import React from 'react'
import HeroSection from './components/HeroSection'
import {useGlobalContext } from './context/ProductContext'

const About = () => {
  const {myName} = useGlobalContext();
  const data ={
    name: "Electronic online Shoping",
  }
  return (
    <>
    {myName}
   <HeroSection  myData ={data}/>
    </>
  )
}

export default About
