import React from 'react'
import PropTypes from 'prop-types'

const Cards = ({ children, gap, cardWidth, centered }) => (
  <div
    className={`bricks-cards ${centered && 'bricks-cards--centered'}`}
    style={{
      gridGap: gap,
      gridTemplateColumns: `repeat(auto-fill, minmax(${cardWidth}, 1fr))`,
    }}
  >
    {children}
  </div>
)

Cards.propTypes = {
  children: PropTypes.any,
  gap: PropTypes.string,
  cardWidth: PropTypes.string,
}

Cards.defaultProps = {
  children: null,
  gap: '17px',
  cardWidth: '278px',
}

export default Cards
