import React from 'react'
import { Container, Grid, Button } from 'semantic-ui-react'
import Logo from 'assets/images/logo.png'

const Header = props => (
  <React.Fragment>
    <header className="main-header">
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <img src={Logo} />
          </Grid.Column>
          <Grid.Column width={10} verticalAlign="middle">
            <Button content="من نحن"/>
            <Button content="منتجاتنا"/>
            <Button content="فروعنا" />
          </Grid.Column>
        </Grid>

      </Container>
    </header>
    <div style={{height: '75px'}} />
  </React.Fragment>
)


export default Header
