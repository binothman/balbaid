import React from 'react'
import { Route, Switch } from 'react-router-dom'

// base containers
import Home from 'components/pages/Home'


const RootRouter = () => (
  <Route>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </Route>
)
export default RootRouter
