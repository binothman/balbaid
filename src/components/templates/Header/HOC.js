import React from 'react'

const HOC = WrappedComponent => {
  class Header extends React.Component{
    state = { screenWidth: window.innerWidth }
    componentDidMount(){
      window.addEventListener("resize", this._onScreenResize)
    }

    _onScreenResize = () => {
      this.setState({ screenWidth: window.innerWidth })
    }
    render(){
      return (
        <WrappedComponent
          {...this.props}
          screenWidth={this.state.screenWidth}
        />
      )
    }
  }
  return Header
}

export default HOC
