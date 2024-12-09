import React from 'react'
import CardTeam from '../components/team/Cardteam'
import Footer from '../components/Footer'
import LastDiv from '../components/team/Lastdiv'
import Images from '../components/team/Images'
import Home from '../components/team/Home'

const page = () => {
  return (
    <div>
      <Home/>
      <Images/>
      <CardTeam/>

      <LastDiv/>
      <Footer/>
    </div>
  )
}

export default page
