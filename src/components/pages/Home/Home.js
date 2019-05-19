import React from 'react'

import Header from 'components/templates/Header'
import Slider from 'components/templates/Slider'
import Widget from 'components/atoms/Widget'
import Introduction from 'components/templates/Introduction'
import Brands from 'components/templates/Brands'
import Distributors from 'components/templates/Distributors'

import Footer from 'components/templates/Footer'

const Home = () => (
  <div>
    <Header />
    <Slider />
    <Widget
      title="نبذه عن المؤسسه"
      backgroundColor="#efefef"
      content={<Introduction />}
    />

    <Widget
      title="من منتجاتنا"
      content={<Brands />}
    />

    <Widget
      title="موزعين معتمدين ل"
      content={<Distributors />}
    />

    <Footer />
  </div>
)

export default Home
