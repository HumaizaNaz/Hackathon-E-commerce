import React from 'react'
import Heading from '../components/pricing/Heading'
import Pricing from '../components/pricing/Pricing'
import Icons from '../components/Icons'
import Footer from '../components/Footer'
import Faq from '../components/pricing/Faq'

const page = () => {
  return (
    <div>
      <Heading/>
      <Pricing/>
      <Icons/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default page
