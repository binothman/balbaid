import React from 'react'

import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Header = ({ screenWidth }) => (
  <div>

    {screenWidth >= 700
      ? <DesktopHeader />
      : <MobileHeader />
    }

  </div>

)


export default Header
