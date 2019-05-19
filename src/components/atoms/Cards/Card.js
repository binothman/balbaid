import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children, style, className }) => (
  <div className={`bricks-cards__card ${className}`} style={style}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
}

Card.defaultProps = {
  style: {},
  className: '',
}
export default Card
