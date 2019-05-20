import React from 'react'

import Slider from 'components/templates/Slider'
import Widget from 'components/atoms/Widget'
import Introduction from 'components/templates/Introduction'
import Brands from 'components/templates/Brands'
import Distributors from 'components/templates/Distributors'

const Home = () => (
  <div>
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
  </div>
)

export default Home
