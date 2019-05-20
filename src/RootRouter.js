import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Wrapper from 'components/templates/Wrapper'
// base containers
import Home from 'components/pages/Home'
import About from 'components/pages/About'
import Contact from 'components/pages/Contact'
import Branches from 'components/pages/Branches'

const RootRouter = () => (
  <Wrapper>
    <Route>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/branches" component={Branches} />
        <Route path="/" component={Home} />
      </Switch>
    </Route>
  </Wrapper>
)
export default RootRouter
