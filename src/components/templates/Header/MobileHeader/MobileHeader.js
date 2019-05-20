import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Grid, Button, Icon, Sidebar, Segment, Menu } from 'semantic-ui-react'
import Logo from 'assets/images/logo.png'

const MobileHeader = ({ sidebarToggle, visible, closeSidebar }) => (
  <React.Fragment>
    <header className="main-header">
      <Container>
        <Grid>
          <Grid.Column width={10}>
            <NavLink to="/">
              <img src={Logo} width="100%" />
            </NavLink>
          </Grid.Column>
          <Grid.Column width={6} textAlign="right" verticalAlign="middle">
            <Button
              icon={<Icon name="bars"  size="large" />}
              onClick={sidebarToggle}
            />
          </Grid.Column>
        </Grid>
      </Container>
    </header>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      onHide={closeSidebar}
      vertical
      visible={visible}
      width='thin'
    >
      <Menu.Item as={NavLink} to="/" exact onClick={closeSidebar}>
        الرئيسيه
      </Menu.Item>
      <Menu.Item as={NavLink} to="/about" exact onClick={closeSidebar}>
        من نحن
      </Menu.Item>
      <Menu.Item as="a">
         المنتجات
      </Menu.Item>
      <Menu.Item as={NavLink} to="/branches" exact onClick={closeSidebar}>
         فروعنا
      </Menu.Item>
      <Menu.Item as={NavLink} to="contact" exact onClick={closeSidebar}>
         اتصل بنا
      </Menu.Item>
    </Sidebar>
    <div style={{height: '75px'}} />
  </React.Fragment>
)

export default MobileHeader
