import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Widget from './Widget'
import Logo from 'assets/images/footer-logo.png'

const Footer = () => (
  <footer className="page-footer">
    <Container>
      <Grid>
        <Grid.Row >
          <Grid.Column computer={4} mobile={16}>
            <Widget
              title="عناويننا"
              content={
                <ul className="footer-widget__list">
                  <li>المكتب الرئيسي - الرياض</li>
                  <li>هاتف : 4324234</li>
                  <li>فاكس: 332132</li>
                </ul>
              }
            />
          </Grid.Column>
          <Grid.Column computer={4} mobile={16}>
            <Widget
              title="فروعنا"
              content={
                <ul className="footer-widget__list">
                  <li>فرع العزيزيه</li>
                  <li>فرع الربوه</li>
                  <li>فرع عتيقه</li>
                </ul>
              }
            />
          </Grid.Column>

          <Grid.Column computer={4} mobile={16}>
            <Widget
              title="روابط مفيده"
              content={
                <ul className="footer-widget__list">
                  <li>من نحن</li>
                  <li>للاتصال بنا</li>
                  <li>المنتجات</li>
                </ul>
              }
            />
          </Grid.Column>

          <Grid.Column computer={4} mobile={16} verticalAlign="middle">
            <img src={Logo} style={{opacity: .5}}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <div className="footer-copyright">
      جميع الحقوق محفوظه لمؤسسه محمد سعيد بالبيد المحدوده  	&copy;
      {` ${new Date().getFullYear()}`}
    </div>
  </footer>
)

export default Footer
