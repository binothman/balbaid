import React from 'react'

import Header from 'components/templates/Header'
import Footer from 'components/templates/Footer'

const Wrapper = ({ children }) => (
  <div>
    <Header />
      {children}
    <Footer />
  </div>
)

export default Wrapper
