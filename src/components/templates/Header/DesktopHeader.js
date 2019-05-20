import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Grid, Button, Icon } from 'semantic-ui-react'
import Logo from 'assets/images/logo.png'


const DesktopHeader = () => (
  <React.Fragment>
    <header className="main-header">
      <Container>
        <Grid>
          <Grid.Column width={5}>
            <NavLink to="/"><img src={Logo} /></NavLink>
          </Grid.Column>
          <Grid.Column width={8} verticalAlign="middle">
            <Button
              content="الرئيسيه"
              as={NavLink}
              to="/"
              exact
            />
            <Button
              content="من نحن"
              as={NavLink}
              to="/about"
            />
            <Button
              content="منتجاتنا"
              as={NavLink}
              to="/products"
            />
            <Button
              content="فروعنا"
              as={NavLink}
              to="/branches"
            />
            <Button
              content="اتصل بنا"
              as={NavLink}
              to="/contact"
            />
          </Grid.Column>
          <Grid.Column width={3} verticalAlign="middle">
            <div className="social-links">
              <Icon name="instagram" size="large"/>
              <Icon name="twitter" size="large"/>
              <Icon name="facebook" size="large"/>
            </div>
          </Grid.Column>
        </Grid>

      </Container>
    </header>
    <div style={{height: '75px'}} />
  </React.Fragment>
)

export default DesktopHeader
