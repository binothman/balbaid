import React from 'react'
import { Container } from 'semantic-ui-react'

const Page = ({ title, children }) => (
  <div className="page-container">
    <Container>
      <h1>{title}</h1><br />
      {children}
    </Container>
  </div>
)

export default Page
