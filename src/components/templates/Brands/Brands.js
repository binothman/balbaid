import React from 'react'
import { Grid } from 'semantic-ui-react'

import AbuDalla from 'assets/images/abu-dalla.png'
import AbuSiarh from 'assets/images/abu-siarh.png'

const Brands =  () => (
  <div className="widget-brands">
    <Grid>
      <Grid.Column computer={8} mobile={16} textAlign="center">
        <img src={AbuDalla} width="100%" />
      </Grid.Column>
      <Grid.Column computer={8} mobile={16} textAlign="center">
        <img src={AbuSiarh} width="100%" />
      </Grid.Column>
    </Grid>
  </div>
)

export default Brands
