import React from 'react'

const HOC = WrappedComponent => {
  class MobileHeader extends React.Component{
    state = { visible: false }

    sidebarToggle = () => {
      console.log('aa')
      this.setState({ visible: !this.state.visible })
    }

    closeSidebar = () => {
      this.setState({ visible: false })
    }
    render(){
      return (
        <WrappedComponent
          {...this.props}
          visible={this.state.visible}
          sidebarToggle={this.sidebarToggle}
          closeSidebar={this.closeSidebar}
        />
      )
    }
  }

  return MobileHeader
}

export default HOC
