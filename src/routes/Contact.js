import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Form from '../components/Form'

const Contact = () => {
  return (
    <>
      <Navbar />
      <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
      <Form />
      <Footer />
    </>
  )
}

export default Contact