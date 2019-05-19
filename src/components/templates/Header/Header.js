import React from 'react'
import { Container, Grid, Button, Icon } from 'semantic-ui-react'
import Logo from 'assets/images/logo.png'

const Header = props => (
  <React.Fragment>
    <header className="main-header">
      <Container>
        <Grid>
          <Grid.Column width={5}>
            <img src={Logo} />
          </Grid.Column>
          <Grid.Column width={8} verticalAlign="middle">
            <Button content="من نحن"/>
            <Button content="منتجاتنا"/>
            <Button content="فروعنا" />
            <Button content="اتصل بنا" />
          </Grid.Column>
          <Grid.Column width={3} verticalAlign="middle">
            <Icon name="facebook" size="large"/>
            <Icon name="facebook" size="large"/>
            <Icon name="facebook" size="large"/>
          </Grid.Column>
        </Grid>

      </Container>
    </header>
    <div style={{height: '75px'}} />
  </React.Fragment>
)


export default Header
