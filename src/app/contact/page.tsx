import React from 'react'


import Home from '../components/contact/Home'
import Card from '../components/contact/Card'
import FeedbackManager from '../components/contact/feedbackManager'

const page = () => {
  return (
    <div>
      <Home/>
      <Card/>
      <FeedbackManager/>
    </div>
  )
}

export default page
