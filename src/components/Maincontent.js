import React from 'react'
import Imgslider from './Imgslider'
import Tabsection from './Tabsection'
import About from './About'
import Faq from './Faq'
import Footer from './Footer'

function Maincontent() {
  return (
      <>
      <span id="home"></span>
      <Imgslider />
      <div className="my-5 shadow-sm rounded-3 p-3">
      <Tabsection />
      </div>
      <About />
      <div className="mt-5">
      <Faq />
      </div>
      <Footer />
      </>
  )
}

export default Maincontent