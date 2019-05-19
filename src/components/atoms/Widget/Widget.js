import React from 'react'
import { Container } from 'semantic-ui-react'

const Widget = ({ title, content, backgroundColor }) => (
  <div className="section-widget" style={{backgroundColor}}>
    <Container>
      <div className="widget__title">
        <h2 className="widget__title_content">{title}</h2>
      </div>
      <div className="widget__content">
        {content}
      </div>
    </Container>
  </div>
)

export default Widget
