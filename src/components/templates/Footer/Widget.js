import React from 'react'

const Widget = ({ title, content }) => (
  <div className="footer-widget">
    <h3 className="footer-widget__title">{title}</h3>
    {content}
  </div>
)

export default Widget
