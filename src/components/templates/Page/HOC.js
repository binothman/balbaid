import React from 'react'

const HOC = WrappedComponent => {
  class Page extends React.Component{
    componentWillMount(){
      window.scrollTo(0 , 0)
    }
    render(){
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }

  return Page
}

export default HOC
