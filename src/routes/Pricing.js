import React from 'react'
import Navbar from '../components/Navbar'
import PricingCard from '../components/Pricing'
import HeroImageCard from '../components/HeroImage'
import Footer from '../components/Footer'


const Pricing = () => {
    return (
        <>
            <Navbar />
            <HeroImageCard heading='PRICING.' text='Choose your trip.' />
            <PricingCard/>
            <Footer/>
        </>

    )
}

export default Pricing